const DB = require('better-sqlite3'); // npm i better-sqlite3
const crypto = require('crypto'); 

const getHash = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}

const comparePassword = (password, storedHash) => {
    const [salt, hash] = storedHash.split(':');
    const currentHash = crypto.scryptSync(password, salt, 64).toString('hex');
    return hash === currentHash;
}

// = = = = = = = = = = = = = = 

const checkPassword = (userName, password) => {
    let query = `SELECT * FROM users WHERE userName = ?`;
    let stmt = db.prepare(query);
    let record = stmt.get(userName); // object
    return comparePassword(password, record.hashPassword);
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_pass.sqlite3';
const db = new DB(dbPath);

// let userName = 'Ivan';
let userName = 'Petr';
// let pass = 'truePass';
let pass = 'falsePass';

let res = checkPassword(userName, pass);
console.log(pass, res);
