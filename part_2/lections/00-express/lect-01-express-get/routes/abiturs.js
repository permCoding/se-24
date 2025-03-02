const Router = require('express');
const router = Router();
const abiturs = require('../json/abiturs.json');

const {
    query,
    body,
    validationResult, 
    matchedData, 
    checkSchema 
} = require('express-validator');

const { postValidSchema } = require('../utils/postValidSchema');
const { getValidSchema } = require('../utils/getValidSchema');

const checkId = (req, res, next) => {
    let params = req.params;
    let id = +params.id;
    if (isNaN(id)) return res.sendStatus(400);
    let idFind = abiturs.findIndex(x => x.id == id);
    if (idFind === -1) return res.sendStatus(404);
    req.id = idFind;
    next();
}

// root = /abiturs
// http://localhost:3000/abiturs/filter?city=Кунгур

router.get('/filter', 
    checkSchema(getValidSchema),
    (req, res) => {
        let result = validationResult(req);
        if (result.errors.length > 0) {
            res.json(result.errors)
        } else {
            res.json(abiturs.filter(x => x.city == req.query.city));    
        }
    }
);

router.get('/', (req, res) => { res.json(abiturs) });

router.post('/', 
    checkSchema(postValidSchema),
    (req, res) => { // http://localhost:3000/abiturs
        let result = validationResult(req);
        if (!result.isEmpty()) {
            console.log(result);
            return res.status(400).send({errors: result.array()});
        }
        let id = abiturs.at(-1).id + 1;
        
        let data = matchedData(req); // это те поля, которые проверены
        abiturs.push( { id, ...data } ); // добавляемый объект
        res.json(abiturs); // для контроля
    }
);

router.put('/:id', // http://localhost:3000/abiturs/20
    checkId,
    checkSchema(postValidSchema), 
    (req, res) => {
        let result = validationResult(req);
        if (!result.isEmpty()) {
            console.log('PUT', result);
            return res.status(400).send({errors: result.array()});
        }
        let { id, body } = req;
        abiturs[id] = { ...abiturs[id], ...body };
        res.json(abiturs); // для контроля
    }
);

router.patch('/:id', // http://localhost:3000/abiturs/20
    checkId,
    (req, res) => {
        let { id, body } = req; // тут меняем поля без валидации
        abiturs[id] = { ...abiturs[id], ...body };
        res.json(abiturs); // для контроля
    }
);

router.get('/:id', // http://localhost:3000/abiturs/19
    checkId,
    (req, res) => {
        res.json(abiturs[req.id]);
    }
);

module.exports = router
