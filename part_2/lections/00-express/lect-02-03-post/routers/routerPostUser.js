const fs = require('fs');

const router = require('express').Router();

// тут путь уже относительный - /postUser

router.post('/', (req, res) => {
    let { firstName, lastName, rating } = req.body;
    fs.appendFileSync(global.filename, `${firstName},${lastName},${rating}\n`, 'utf8');
    res.send({ firstName, lastName, rating }); // для контроля
});

router.get('/', (req, res) => {
    res.render('postUser', { });
});

module.exports = router;
