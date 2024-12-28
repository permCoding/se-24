const sqlite3 = require('sqlite3').verbose(); // npm install --save sqlite3
const { getRandomName, getRandomRate } = require('./utils');
const Gen = require('./utils').Generator;
const db = new sqlite3.Database('./databases/db_01.sqlite3');


const createTable = () => {
	let query = 'CREATE TABLE IF NOT EXISTS "students" ( \
		"id"	INTEGER, \
		"name"	TEXT, \
		"rate"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT))';
	db.run(query);
}

const insertData = (count=10_000) => {
	db.serialize(function() {
		let query = 'INSERT INTO students ("name", "rate") VALUES (?, ?)';

		db.run("begin transaction");
		for (var i = 0; i < count; i++) {
			// db.run(query, getRandomName(), getRandomRate());
			db.run(query, Gen.getRandomName(), Gen.getRandomRate());
			if (i%10_000==0) { // сравнить 10_000 и 10
				db.run("commit");
				db.run("begin transaction");
			}
		}
		db.run("commit");
	})
}

const select = () => {
	let query = 'SELECT id, name, rate \
		FROM students \
		WHERE name = "py"'
	db.all(query, function (err, rows) {  
		console.log(rows.length);
	});
}

createTable();
insertData(10_000);
select();

db.close();
// будет ошибка при совместном запуске более одной команды
