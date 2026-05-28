require('dotenv').config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;

console.log("Server config loaded:");
console.log("PORT:", PORT);
console.log("NODE_ENV:", NODE_ENV);
console.log("JWT_SECRET exists:", JWT_SECRET !== undefined);