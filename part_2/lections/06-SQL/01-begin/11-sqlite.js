const sqlite3 = require('sqlite3').verbose(); // npm install --save sqlite3
const sqlite = require('sqlite');
// sqlite - wrape sync - https://www.npmjs.com/package/sqlite
const Gen = require('./utils').Generator;


let queryCreate = 'CREATE TABLE IF NOT EXISTS "students" ( \
	"id"	INTEGER, \
	"name"	TEXT, \
	"rate"	INTEGER, \
	PRIMARY KEY("id" AUTOINCREMENT))';

const getQueryInsert = () => `INSERT INTO students ("name", "rate") VALUES ("${Gen.getRandomName()}", ${Gen.getRandomRate()})`;
const strQueryInsert = 'INSERT INTO students ("name", "rate") VALUES (?, ?)';

let querySelect = 'SELECT id, name, rate FROM students WHERE LENGTH(name) = 2 AND (name LIKE "p%" or name LIKE "j%")';
querySelect += ' ORDER BY rate DESC';

const doit = async (count, filename) => {
    const db = await sqlite.open({ filename, driver: sqlite3.Database });

    await db.exec(queryCreate);
    
    for (var i = 0; i < count; i++) { 
        // await db.exec(getQueryInsert());
        await db.run(strQueryInsert, [Gen.getRandomName(), Gen.getRandomRate()]);
    }

    let selectedRows = await db.all(querySelect);

    await db.close();

    return selectedRows;
};

let filenameDB = './databases/db_02.sqlite';
doit(1_000, filenameDB) // это Promise
    // .then(rows => rows.sort((a,b) => a.rate>b.rate?-1:+1)) // desc
    .then(rows => console.table(rows)); // показывает, что работает sync
