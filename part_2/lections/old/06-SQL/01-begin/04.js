const sqlite3 = require('sqlite3').verbose(); // npm install --save sqlite3
const Gen = require('./utils').Generator;


let queryCreate = 'CREATE TABLE IF NOT EXISTS "students" ( \
	"id"	INTEGER, \
	"name"	TEXT, \
	"rate"	INTEGER, \
	PRIMARY KEY("id" AUTOINCREMENT))';

let queryInsert = 'INSERT INTO students ("name", "rate") VALUES (?, ?)';

let querySelect = 'SELECT id, name, rate FROM students WHERE name = "py"';

const doit = (db, count) => {
    db.serialize(() => {    

        db.run(queryCreate);

        var stmt = db.prepare(queryInsert);
		for (var i = 0; i < count; i++) {
			stmt.run(Gen.getRandomName(), Gen.getRandomRate());
		}
        stmt.finalize();

        db.all(querySelect, (err, rows) => {
            console.log(rows.length);
        });

        db.close();
	});

};

let filenameDB = './databases/db_01.sqlite3';
const db = new sqlite3.Database(filenameDB);
doit(db, 10_000);
