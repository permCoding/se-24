const DB = require('better-sqlite3');
const dbPath = './data/users.db';

const insertRecord = (params) => { // Model from MVC
    const db = new DB(dbPath);
    const queryInsert = `INSERT INTO users \
        ("lastName", "firstName", "gender", "idGroup") \ 
        VALUES (?, ?, ?, ?)`
    
    try {
        const stmt = db.prepare(queryInsert);
        const result = stmt.run(...params);
        console.log(result.lastInsertRowid, result.changes); // lastID, amoundInserted
    } catch (error) {
        console.log(error.message);
    } finally {
        db.close();
    }
}

module.exports = {
    insertRecord
};
