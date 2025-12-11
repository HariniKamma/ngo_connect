const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./data.db')


// initialize tables
db.serialize(()=>{
db.run(`CREATE TABLE IF NOT EXISTS volunteers (id INTEGER PRIMARY KEY, name TEXT, area TEXT, msg TEXT, date TEXT)`)
db.run(`CREATE TABLE IF NOT EXISTS donations (id INTEGER PRIMARY KEY, amount REAL, date TEXT)`)
db.run(`CREATE TABLE IF NOT EXISTS updates (id INTEGER PRIMARY KEY, title TEXT, body TEXT, date TEXT)`)


// Sample update
db.get('SELECT COUNT(*) as c FROM updates', (err,row)=>{
if(row.c===0){
db.run(`INSERT INTO updates (title,body,date) VALUES (?,?,?)`, ['Launch Event','We launched NGO-Connect — thanks to everyone!','2025-11-01'])
}
})
})


module.exports = db