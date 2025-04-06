const router = require('express').Router();
const model = require('../models/modelGetUsers');

router.get('/getUsers/sort/:direct', (req, res) => {
    let direct = (req.params.direct.toUpperCase() != 'DESC')? 'DESC': 'ASC'; // валидация
    let rows = model.selectRecordsOrderBy(direct);
    res.render('getUsers.ejs', { rows });
});

router.get(['/getUsers', '/', '*'], (req, res) => {
    let rows = model.selectRecords();
    res.render('getUsers.ejs', { rows });
});

module.exports = router;
