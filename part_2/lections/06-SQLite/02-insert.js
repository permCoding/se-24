const sqlite3 = require('sqlite3').verbose()

const queryInsert = `INSERT INTO abiturs \
    ("lastName", "rating", "gender", "birthDate", "city") \ 
    VALUES (?, ?, ?, ?, ?)`  // параметризованный запрос

const insert = (obj) => {
    let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city]
    db.serialize(() => {
        db.run(queryInsert, params)
        db.close()
    })
}

const insertMany = (arrayObj) => {
    db.serialize(function() {
        for (var obj of arrayObj) {
            let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city]
            db.run("begin transaction")
            db.run(queryInsert, params)
            db.run("commit")
        }
        db.close()
    })
}

const select = () => {
    let query = `SELECT * \
        FROM abiturs \
        WHERE rating > 190 AND gender = true
        ORDER BY city ASC, rating DESC`
    db.serialize(() => {
        db.all(query, (err, rows) => {
            console.table(rows)
            console.log(rows.length)
        })
        db.close()
    })
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath)
let abiturs = require('./data/abiturs.json')

// console.log(abiturs);

// insert(abiturs.at(-1))
// insertMany(abiturs)
select()