const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
// режим verbose для подробных сообщений об ошибках

const eventCreateDB = (err) => {
    if (err) {
        console.error("Ошибка при открытии/создании базы данных:", err.message)
    } else {
        console.log('Успешно подключено к базе данных.')
    }
}

const eventCreateTable = (err) => {
    if (err) {
        console.error("Ошибка при создании таблицы:", err.message)
    } else {
        console.log("Таблица создана или уже существовала.")
    }
}

const eventCloseDB = (err) => {
    if (err) {
        console.error("Ошибка при закрытии базы данных:", err.message);
    } else {
        console.log("Соединение с базой данных закрыто.");
    }
}

const event = (err) => {
    if (err) {
        console.error("Ошибка:", err.message);
    } else {
        console.log("НЕТ ошибок");
    }
}

// = = = = = = = = = = = = = = 

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
    let query = ` \
        CREATE TABLE IF NOT EXISTS "abiturs" ( \
            "id"    INTEGER, \
            "lastName"    TEXT, \
            "rating"    INTEGER, \
            "gender"    INTEGER, \
            "birthDate"    TEXT, \
            "city"    TEXT, \
            PRIMARY KEY("id" AUTOINCREMENT) \
        )`

    db.serialize(() => { // запросы будут выполняться последовательно
        db.run(query, eventCreateTable)
        db.close(eventCloseDB) // обязательно закрываем соединение
    })
}

const dropTable = () => {
    let query = "DROP TABLE IF EXISTS abiturs"
    db.serialize(() => { // запросы будут выполняться последовательно
        db.run(query)
        db.close(event)
    })
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
// const db = new sqlite3.Database(dbPath) // Создаем новую базу данных (или открываем существующую)
const db = new sqlite3.Database(dbPath, eventCreateDB)

// createTable()
createTableFull()
// dropTable()
