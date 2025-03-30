const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
// режим verbose для подробных сообщений об ошибках
const dbPath = './data/db_01.sqlite3'
const db = new sqlite3.Database(dbPath) // Создаем новую базу данных (или открываем существующую)
/*
const reactToError = (err) => {
    if (err) {
        console.error("Ошибка при открытии/создании базы данных:", err.message);
    } else {
        console.log('Успешно подключено к базе данных.');
    }
}

const db = new sqlite3.Database(dbPath, reactToError);
*/

// 1 - create & delete

const createTable = () => {
    let query = ' \
        CREATE TABLE IF NOT EXISTS "abiturs" ( \
            "id"    INTEGER, \
            "lastName"    TEXT, \
            "rating"    INTEGER, \
            "gender"    INTEGER, \
            "birthDate"    TEXT, \
            "city"    TEXT, \
            PRIMARY KEY("id" AUTOINCREMENT) \
        )'
    db.run(query)
    db.close()
}

const createTableFull = () => {
    let query = ' \
        CREATE TABLE IF NOT EXISTS "abiturs" ( \
            "id"    INTEGER, \
            "lastName"    TEXT, \
            "rating"    INTEGER, \
            "gender"    INTEGER, \
            "birthDate"    TEXT, \
            "city"    TEXT, \
            PRIMARY KEY("id" AUTOINCREMENT) \
        )'
    db.run(query)
    db.close()
}

const deleteTable = () => {
    let query = "DROP TABLE IF EXISTS abiturs"
    db.run(query)
    db.close()
}

// 2 - insert ONE & MANY

const insertRecord = () => {
    let query = 'INSERT INTO abiturs ("lastName", "rating") VALUES (?, ?)'
    db.run(query, getRandomName(), getRandomRate())
    db.run("commit")
}


const insertData = (count=100_000) => {
    db.serialize(function() {
        let query = 'INSERT INTO abiturs ("lastName", "rating") VALUES (?, ?)'

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