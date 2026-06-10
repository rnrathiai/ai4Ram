const db = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Username, email and password are required"
        });
    }

    const upperUsername = username.trim().toUpperCase();
    const lowerEmail = email.trim().toLowerCase();

    db.get('SELECT id, username, email FROM users WHERE username = ? OR email = ?',
        [upperUsername, lowerEmail],
        (err, existingUser) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Database error" });
            }

            if (existingUser && existingUser.username === upperUsername) {
                return res.status(409).json({ success: false, message: "Username already taken" });
            }
            if (existingUser && existingUser.email === lowerEmail) {
                return res.status(409).json({ success: false, message: "Email already registered" });
            }

            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ success: false, message: "Error processing password" });
                }

                db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                    [upperUsername, lowerEmail, hashedPassword],
                    function (err) {
                        if (err) {
                            return res.status(500).json({ success: false, message: "Error creating user" });
                        }
                        console.log('New user created:', upperUsername);
                        return res.status(201).json({
                            success: true,
                            message: "User created successfully",
                            user: { id: this.lastID, username: upperUsername, email: lowerEmail }
                        });
                    }
                );
            });
        }
    );
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required"
        });
    }

    db.get('SELECT * FROM users WHERE username = ?',
        [username.trim().toUpperCase()],
        (err, found) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Database error" });
            }

            if (!found) {
                return res.status(400).json({ success: false, message: "Invalid username or password" });
            }

            bcrypt.compare(password, found.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).json({ success: false, message: "Invalid username or password" });
                }

                const token = jwt.sign(
                    { userId: found.id, username: found.username },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                );

                return res.status(200).json({
                    success: true,
                    message: "Login successful",
                    token: token,
                    user: { id: found.id, username: found.username, email: found.email }
                });
            });
        }
    );
};