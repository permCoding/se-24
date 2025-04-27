const sqlite3 = require('sqlite3').verbose(); // npm install sqlite3
const crypto = require('crypto'); 

const getHash = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}

// = = = = = = = = = = = = = = 

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
        CREATE TABLE IF NOT EXISTS users ( \
                  "idUser" INTEGER, \
                "userName" TEXT, \
            "hashPassword" TEXT, \
            PRIMARY KEY("idUser" AUTOINCREMENT) \
        )';

    db.serialize(() => {
        db.run(query, event)
        db.close(event);
    })
}

const dropTable = () => {
    let query = "DROP TABLE IF EXISTS users"
    db.serialize(() => {
        db.run(query, event);
        db.close(event);
    })
}

const insertUser = (userName, userPassword) => {
    const query = `INSERT INTO users \
        ("userName", "hashPassword") VALUES (?, ?)`;

    let params = [userName, getHash(userPassword)];
    db.serialize(() => {
        db.run(query, params, event);
        db.close(event);
    })
}

const deleteFromTable = (userName) => {
    let query = `DELETE FROM users WHERE userName = :userName`
    db.serialize(() => {
        db.run(query, [userName], event);
        db.close(event);
    })
}

const selectAll = () => {
    let query = `SELECT * FROM users`;
    db.serialize(() => {
        db.all(query, (err, rows) => {
            console.log(JSON.stringify(rows, null, 4));
            console.log(`Всего записей: ${rows.length}`);
        })
        db.close(event);
    })
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_pass.sqlite3';
const db = new sqlite3.Database(dbPath, event);

// createTable();
// insertUser('Ivan', 'truePass');
// insertUser('Petr', 'truePass');
selectAll();
// dropTable();
// deleteFromTable('Ivan');
