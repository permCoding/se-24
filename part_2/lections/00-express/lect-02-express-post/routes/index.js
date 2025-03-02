const Router = require('express');
const router = Router();

// root = /index
// root = /
// http://localhost:3000/
// http://localhost:3000/index

router.get('/', (req, res) => { res.status(200).send('/') });

module.exports = router
