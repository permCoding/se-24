const Router = require('express');
const router = Router();
const abiturs = require('../json/abiturs.json');

/**
 * mfCheckId - middleware function
 * 
 * проверяет наличие id и проверяет что id это число
 * находит индекс объекта с таким id и добавляет к объекту запроса поле index
 * @param {*} req - объект запроса от клиента
 * @param {*} res - объект ответа от сервера
 * @param {*} next - передача управления
 * @returns 
 */
const mfCheckId = (req, res, next) => {
    let id = +req.params.id;
    if (isNaN(id)) return res.sendStatus(400);
    let index = abiturs.findIndex(x => x.id == id);
    if (index === -1) return res.sendStatus(404);
    req.index = index;
    next();
} // 

// root = /abiturs

router.get('/filter', (req, res) => {
    res.json(abiturs.filter(x => x.city == req.query.city));
}); // http://[::1]:3000/abiturs/filter?city=Кунгур

router.get('/:id',
    mfCheckId, // middleware function
    (req, res) => res.json(abiturs[req.index])
); // http://[::1]:3000/abiturs/19

router.get('/', (req, res) => { 
    res.json(abiturs) 
}); // http://[::1]:3000/abiturs

router.post('/', (req, res) => { // без валидации
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект
    res.json(abiturs); // для контроля
}); // http://[::1]:3000/abiturs

router.put('/:id',
    mfCheckId,
    (req, res) => { // без валидации
        abiturs[req.index] = { ...abiturs[req.index], ...req.body };
        res.json(abiturs); // для контроля
    }
); // http://[::1]:3000/abiturs/20

router.patch('/:id', 
    mfCheckId,
    (req, res) => { // без валидации
        abiturs[req.index] = { ...abiturs[req.index], ...req.body };
        res.json(abiturs); // для контроля
    }
); // http://[::1]:3000/abiturs/20

module.exports = router;
