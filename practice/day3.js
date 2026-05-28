// Write a function called findUser that:

// Takes a username as input
// Searches the users array above
// Returns the full user object if found
// Returns "User not found" if not found

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



// 1. getLoggedOutUsers() — returns all users where isLoggedIn is false
// 2. getUserByEmail(email) — takes an email, returns the matching user or "User not found"

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
// console.log("Find Logged out users:", getLoggedOutUsers());
// console.log("Find by email:", getUserByEmail("ram@email.com"));
// console.log("Find by email:", getUserByEmail("ram1@email.com"));




// console.log("Find RAM:", findUser("RAM"));
// console.log("Find RAMK:", findUser("RAMK"));

// //Registered user exist

// const registeredUsers = ["RAM", "JOHN", "SARA"]

// function isUsernameTaken(username){
//     return registeredUsers.includes(username.trim().toUpperCase())
    
// }
// console.log(isUsernameTaken("ram"));   // true  — already taken
// console.log(isUsernameTaken("Bob"));   // false — available
// console.log(isUsernameTaken(" JOHN ")); // true  — spaces trimmed



// Write a function called validateEmail that:
// - Checks the input is not empty
// - Checks it contains an @ symbol
// - Checks it contains a . after the @
// - Returns a proper message for each case


// function validateEmail(email){
//     console.log(email)

//     if (email === ""){
//         return "Email is empty"
//     }
//     if (!email.includes("@")){
//         return "Email does not have @ symbol"
//     }
//     if (email.startsWith('@')){
//         return "no username before @"
//     }
//     if (email.includes("@.")){
//         return "dot after @"
//     }
//     if (email.endsWith('.')){
//         return "dot at the end"
//     }
//     if (!email.split("@")[1].includes(".")){
//         return "Email need to have dot"
//     }
//     return "Email is valid"

// }

// const email1 = ""
// const email2 = "asdfasdf"
// const email3 = "asdfas@asdf"
// const email4 = "abc@abc.com"
// const email5 = "@test.com"
// const email6 = "a@.com"
// const email7 = "a@abc."
// console.log(validateEmail(email1))
// console.log(validateEmail(email2))
// console.log(validateEmail(email3))
// console.log(validateEmail(email4))
// console.log(validateEmail(email5))
// console.log(validateEmail(email6))
// console.log(validateEmail(email7))








// function validateUsername(username){
//     console.log(username)
//     if(username.length < 4 || username.length > 25)
//         return "Invalid user name";
//     if (!/\d/.test(username))
//         return "username need to contain the number"
//     if (!/[A-Z]/.test(username))
//         return "One of the letter need to be upper case"
//     return "Correct username"
// }
// username1="ram"
// username2="abcded"
// username3="12345"
// username4="Ramdurg1"
// console.log(validateUsername(username1))
// console.log(validateUsername(username2))
// console.log(validateUsername(username3))
// console.log(validateUsername(username4))