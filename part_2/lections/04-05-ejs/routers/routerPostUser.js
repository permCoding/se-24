const fs = require('fs');
const router = require('express').Router();

// тут путь уже относительный - "/postUser"
router.post('/', (req, res) => { // это "/" - уже после "/postUser"
    let { firstName, lastName, rating } = req.body;
    fs.appendFileSync(global.filename, `${firstName},${lastName},${rating}\n`, 'utf8');    
    res.redirect('/getUsers');
    // res.render('getUsers.ejs', { }); // без getUsers.ejs не работает
});

router.get('/', (req, res) => { // это "/" - уже после "/postUser"
    res.render('postUser.ejs', { });
});

module.exports = router;