const router = require('express').Router();
const { insertRecord } = require('../models/modelPostUser');

router.post('/postUser', (req, res) => { // Controller from MVC
    let { firstName, lastName, gender } = req.body;
    let idGroup = 1; // это доделать - выпадающий список по nameGroup
    let params = [lastName, firstName, gender, idGroup];
    // insertRecord(req.body); // Model data from MVC
    insertRecord(params); // Model data from MVC

    res.redirect('/getUsers');
});

router.get('/postUser', (req, res) => {
    res.render('postUser.ejs', { 
        'arr': [1,2,3,4,5],
        'titleButton': 'Изменить'
    }); // View from MVC
});

module.exports = router;
