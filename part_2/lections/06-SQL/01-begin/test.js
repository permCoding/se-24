const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const { getRandomName, getRandomRate } = require('util');
const db = new sqlite3.Database('./databases/db_01.sqlite3')


const createTable = () => {
	let query = 'CREATE TABLE IF NOT EXISTS "students" ( \
		"id"	INTEGER, \
		"name"	TEXT, \
		"rate"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT))'
	db.run(query)
	db.close()
}

const deleteTable = () => {
	let query = "DROP TABLE IF EXISTS students"
	db.run(query)
	db.close()
}

const insertData = (count=100_000) => {
	db.serialize(function() {
		let query = 'INSERT INTO students ("name", "rate") VALUES (?, ?)'

		db.run("begin transaction")
		for (var i = 0; i < count; i++) {
			db.run(query, getRandomName(), getRandomRate())
			if (i%100_000==0) {
				db.run("commit")
				db.run("begin transaction")	
			}
		}
		db.run("commit")
	})
}

const createIndex = () => {
	let query = 'CREATE INDEX "index_name" ON students ("name")'
	db.run(query)
	db.close()
}

const deleteIndex = () => {
	let query = 'DROP INDEX index_name'
	db.run(query)
	db.close()
}

const select = () => {
	console.time("time")
	let query = 'SELECT id, name, rate \
		FROM students \
		WHERE name = "py"'
	db.all(query, function (err, rows) {  
		console.log(rows.length)
		console.timeEnd("time")
	});
	db.close()
}

createTable()
// deleteTable()
// insertData(100_000)
// createIndex()
// deleteIndex()

// select()