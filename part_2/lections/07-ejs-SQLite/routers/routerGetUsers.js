const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
const dbPath = './data/users.db';

/*
    ./getUsers/

    + вариант с инъекцией - только это
    - вариант с переменной в запросе :direct , params = { ':direct': req.params.direct }
    - вариант с параметром ? , params = [req.params.direct]
    ТАК КАК => подстановка в ORDER BY не поддерживается
*/

router.get('/sort/:direct', (req, res) => {
    let direct = (req.params.direct.toUpperCase() == 'DESC')? 'DESC': 'ASC';
    let query = `SELECT * FROM users ORDER BY lastName ${direct}`; // допустимая инъекция
    
    const db = new sqlite3.Database(dbPath);
    db.serialize(() => {
        db.all(query, (err, rows) => { // db.all(query, params, (err, rows)
            // console.table(rows);
            res.render('getUsers.ejs', { rows });
        })
        db.close();
    });
});

router.get(['/', '*'], (req, res) => {
    let query = `SELECT * FROM users`;

    const db = new sqlite3.Database(dbPath);
    db.serialize(() => {
        db.all(query, (err, rows) => {
            console.table(rows);
            res.render('getUsers.ejs', { rows });
        })
        db.close();
    });
});

module.exports = router;

// db.get() — для одной записи
// db.all() — для нескольких