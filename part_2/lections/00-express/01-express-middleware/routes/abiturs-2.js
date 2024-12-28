const Router = require('express');
const router = Router();
const abiturs = require('../json/abiturs.json');

// http://[::1]:3000/abiturs
// http://localhost:3000/abiturs
// http://localhost:3000/abiturs?city=Кунгур
router.get('/abiturs', (req, res) => {
    let { city } = req.query; 
    console.log(req.query, city);
    if (city === undefined) {
        res.json(abiturs);
    } else {
        res.json(abiturs.filter(x => x.city == city));
    }
});

// post => http://localhost:3000/abiturs
router.post('/abiturs', (req, res) => {
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } );
    res.json(abiturs);
});

router.get('/', (req, res) => { 
    res.status(200).redirect('/abiturs')
});

router.get('/*', (req, res) => {
    res.status(404).send('404')
}); // все остальные пути - ошибка

module.exports = router;
