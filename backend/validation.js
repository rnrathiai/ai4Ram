
const users = [
    { username: "RAM",  email: "ram@email.com",  isLoggedIn: true  },
    { username: "JOHN", email: "john@email.com", isLoggedIn: false },
    { username: "SARA", email: "sara@email.com", isLoggedIn: false }
];

function findUser(username){
    const found = users.find(function(user){
        return user.username === username.trim().toUpperCase()
    })
    
    return found || "User not found"
    
}


function getLoggedOutUsers(){
    return users.filter(function(user){
        return user.isLoggedIn === false
    });
}
function getUserByEmail(email){
    return users.find(function (user){
        return user.email === email.trim().toLowerCase()
    } ) || "User not found"

}

function isUsernameTaken(username){
    const found = users.find(function(user){
        return user.username === username.trim().toUpperCase()
    })
    return found !== undefined

}


function validateEmail(email){

    if (email === ""){
        return "Email is empty"
    }
    if (!email.includes("@")){
        return "Email does not have @ symbol"
    }
    if (email.startsWith('@')){
        return "no username before @"
    }
    if (email.includes("@.")){
        return "dot after @"
    }
    if (email.endsWith('.')){
        return "dot at the end"
    }
    if (!email.split("@")[1].includes(".")){
        return "Email need to have dot"
    }
    return "Email is valid"

}


function validateUsername(username){
    
    const usernameTrimmed = username.trim().toUpperCase()
    if(usernameTrimmed.length < 4 || usernameTrimmed.length > 20)
        return "Username must be 4–20 characters";
    return "Username is valid"
}

function createUser(username, email, password){
    const newUser = {
        username: username.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        password: password,
        isLoggedIn: false,
        createdAt: new Date().toDateString()
    };
    return newUser;
}
function validatePassword(password) {
    if (password.length < 8) {
        return "Too short — minimum 8 characters";
    }
    if (!/\d/.test(password)) {
        return "Must contain at least one number";
    }
    return "Password is valid!";
}
module.exports = {
    validateUsername,
    validateEmail,
    getUserByEmail,
    getLoggedOutUsers,
    isUsernameTaken,
    findUser,
    createUser,
    validatePassword


}
