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
    // доработать такой функционал:
    // что делать если нет userName
    let query = `SELECT * FROM users WHERE userName = ?`;
    let stmt = db.prepare(query);
    let record = stmt.get(userName); // object
    console.log(record);
    return comparePassword(password, record.hashPassword);
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_pass_new.sqlite3';
const db = new DB(dbPath);

// let userName = 'Ivan';
let userName = 'Petr';
let pass = 'truePass';
// let pass = 'falsePass';

let res = checkPassword(userName, pass);
console.log(pass, res);
