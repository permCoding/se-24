const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
const dbPath = './data/users.db';

// ./postUser/

router.post('/', (req, res) => {
    let { firstName, lastName, gender } = req.body;
    let idGroup = 1; // это доделать - выпадающий список по nameGroup

    const queryInsert = `INSERT INTO users \
        ("lastName", "firstName", "gender", "idGroup") \ 
        VALUES (?, ?, ?, ?)`  // параметризованный запрос
    let params = [lastName, firstName, gender, idGroup];

    const db = new sqlite3.Database(dbPath);
    db.serialize(() => {
        db.run(queryInsert, params);
        db.close();
        res.redirect('/getUsers');
    });
});

router.get('/', (req, res) => {
    // 
    res.render('postUser.ejs', { "arr": ['1','2','3'] });
});

module.exports = router;

/*
- сделать UPDATE по клику мышкой по пользователю
- выводится форма для ввода данных по пользователю
- данные пользователя уже заполнены в форме
- можно поменять данные и нажать клавишу Сохранить данные
*/