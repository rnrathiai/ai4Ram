require('dotenv').config();

const express = require('express')
const cors = require('cors')


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

const users = [];

app.post('/signup', (req, res)=>{
    const {username, email, password} = req.body;

    //Check for the data if it is available

    if (!username || !email || !password){
        return res.status(400).json({
            success: false,
            message: "Username, email and password are required"
        });
    }

    const existingUser = users.find(u=>{
        return u.username === username.trim().toUpperCase();
    })

    if (existingUser){
        return res.status(409).json({
            success: false,
            message: "Username already taken"
        });
    }

    //Creating new user
    const newUser = {
        id : users.length + 1,
        username: username.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        password: password,
        createdAt:  new Date().toISOString()
    }

    users.push(newUser)

    console.log('New user created:', newUser.username);
    console.log('Total users:', users.length);

    return res.status(201).json({
        success: true,
        message: "User created successfully",
        user:{
            id: newUser.id,
            username: newUser.username,
            email: newUser.email
        }
    });

});

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
    const found = users.find(u=> {
        return u.username === username.trim().toUpperCase()
    })


    //check user exist and match the passwor
    if(!found || found.password !== password){
        return res.status(400).json({
            success: false,
            message: "Invalid username or password"
        })
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