const DB = require('better-sqlite3');
const dbPath = './data/users.db';

const getRows = (query) => {
    const db = new DB(dbPath);
    
    let rows = [];
    try {
        const stmt = db.prepare(query);
        rows = stmt.all();
    } catch (error) {
        console.log(error.message);
    } finally {
        db.close();
    }

    return rows;
}

const selectRecords = () => {
    const query = `SELECT * FROM users`;
    return getRows(query);
}

const selectRecordsOrderBy = (direct) => {
    const query = `SELECT * FROM users ORDER BY lastName ${direct}`; // допустимая инъекция
    return getRows(query);
}

module.exports = {
    selectRecords,
    selectRecordsOrderBy
};
