require('dotenv').config();
const express = require('express')
const cors = require('cors')
const db = require('./database');
const bcrypt = require('bcryptjs');


const app = express();
const PORT = process.env.PORT || 3000 ;

//Middleware
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.use(express.json())

app.get('/', (req,res) =>{
    res.json({message: "API is running"});
});

app.get('/health', (req, res) => {
    res.json ({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    }); 
});

// Sign up setup

app.post('/signup', (req, res)=>{
    const {username, email, password} = req.body;

    //Check for the data if it is available

    if (!username || !email || !password){
        return res.status(400).json({
            success: false,
            message: "Username, email and password are required"
        });
    }

    const upperUsername = username.trim().toUpperCase();
    const lowerEmail = email.trim().toLowerCase();
    
    //Check if the user already exist
    const existingUser = db.get('SELECT id, username, email FROM users WHERE username = ? OR email = ?', 
        [upperUsername, lowerEmail],
        (err,existingUser)=>{
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database error"
                });
            }    
            
            if (existingUser && existingUser.username === upperUsername){
                return res.status(409).json({
                    success:false,
                    message: "Username already taken"
                })
            }
            if (existingUser && existingUser.email === lowerEmail){
                return res.status(409).json({
                    success:false,
                    message: "Email already registered"
                })
            }

            //Hashing password
            const saltRound = 10;
            bcrypt.hash(password,saltRound, function(err, hashedPassword){
                if(err){
                    return res.status(500).json({
                        success: false,
                        message: "Error processing password"
                    });
                }
            

                db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
                    [upperUsername, lowerEmail, hashedPassword], 
                    function (err){
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: "Error creating user"
                            });
                        }
                        console.log('New user created:', upperUsername);
                        return res.status(201).json({
                            success: true,
                            message: "User created successfully",
                                user: {
                                    id: this.lastID,
                                    username: upperUsername,
                                    email: lowerEmail
                                }
                            });
                    }
                )
            })
        });


})

app.post('/login', (req,res) =>{
    const {username, password} = req.body;

    //Check for required fields
    if(!username || !password){
        return res.status(400).json({
            success: false,
            message: "Username and password are required"
        })
    }

    //Find a user
    const found = db.get('SELECT * FROM users WHERE username = ?',
        [username.trim().toUpperCase()],
        (err, found) => {
            if (err){
                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                })
            }
 

            if(!found){
                return res.status(400).json({
                    success:false,
                    message: "Invalid username or password"
                });
            }
            bcrypt.compare(password,found.password, function(err, isMatch){
                if(err || !isMatch){
                    return res.status(401).json({
                        success: false,
                        message: "Invalid username and password"
                    });
                }
                 //Success
                return res.status(200).json({
                    success:true,
                    message: "Login successful",
                    user: {
                        id: found.id,
                        username: found.username,
                        email: found.email
                    }
                })
            })

        }
    );

})



app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});


const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;

console.log("Server config loaded:");
console.log("PORT:", PORT);
console.log("NODE_ENV:", NODE_ENV);
console.log("JWT_SECRET exists:", JWT_SECRET !== undefined);