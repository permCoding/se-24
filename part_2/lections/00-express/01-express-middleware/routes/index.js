const Router = require('express');
const router = Router();
const users = require('../json/users.json');

// root = /users
// root = /
// http://localhost:3000/
// http://localhost:3000/users

router.get('/', (req, res) => { res.json(users) });

module.exports = router;
