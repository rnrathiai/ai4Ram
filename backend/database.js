const sqlite3 = require('sqlite3');
const path = require('path');

//Database file will be created 
const dbPath = path.join(__dirname, 'ai4ram.db')
const db = new sqlite3.Database(dbPath, (err)=>{
    if(err){
        console.error('Database connection error:', err.message)
    }else{
        console.log('Database connected successfully')
    }
});

//Enable WAL mode
// db.pragma('journal_mode = WAL');

//create user table if it does not exist
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_logged_in INTEGER DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now'))
    )
`, (err) => {
    if (err) {
        console.error('Table creation error:', err.message);
    } else {
        console.log('Users table ready');
    }
});

console.log('Database connected and tables created');

module.exports = db;