const Router = require('express');
const router = Router();
const abiturs = require('../json/abiturs.json');

/** 
 * root = /abiturs
 * тут уже путь после /abiturs
 * http://localhost:3000/abiturs?city=Кунгур
 */
router.get('/', (req, res) => {
        let { city } = req.query;
        console.log(req.query);
        res.json(abiturs.filter(x => x.city == city));
    }
);

module.exports = {
    router
}
