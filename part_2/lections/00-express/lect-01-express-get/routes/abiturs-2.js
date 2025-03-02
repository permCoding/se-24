const Router = require('express');
const router = Router();
const abiturs = require('../json/abiturs.json');

// http://localhost:3000/abiturs?city=Кунгур
router.get('/abiturs', (req, res) => {
    let { city } = req.query; // console.log(req.query);
    res.json(abiturs.filter(x => x.city == city));
});

router.get('/', (req, res) => { 
    res.status(200).send('/') 
});

module.exports = router;
