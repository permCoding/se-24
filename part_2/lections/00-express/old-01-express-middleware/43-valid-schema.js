const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log;

const { 
    query, 
    body, 
    validationResult, 
    matchedData, 
    checkSchema } = require('express-validator');

const { postValidSchema } = require('./utils/postValidSchema');

var abiturs = require('./json/abiturs.json');

app.use(express.json()); // обязательно добавить для распознавания объектов

app.get('/', (req, res) => { res.send('/') });

app.post('/abiturs', 
    checkSchema(postValidSchema),
    (req, res) => { // http://localhost:3000/abiturs
        let result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({errors: result.array()});
        }
        let id = abiturs.at(-1).id + 1;
        
        let data = matchedData(req); // это те поля, которые проверены
        // let data = req.body; // это все переданные в запросе поля
        log(data); // это только для контроля

        abiturs.push( { id, ...data } ); // добавляемый объект
        res.json(abiturs);
    }
);

// http://localhost:3000/abiturs?city=Кунгур
app.get('/abiturs', 
    query('city')
        .isString()
        .withMessage('должен быть строкой')
        .notEmpty()
        .withMessage('должен быть не пустой')
        .isLength({ min: 2, max: 20 })
        .withMessage('должен быть от 2-х до 20-ти символов'),
    (req, res) => {
        // log(req);
        // log(req['express-validator#contexts']);
        let result = validationResult(req);
        // log(result);
        if (result.errors.length > 0) {
            res.json(result.errors)
        } else {
            let { city } = req.query;
            let abiturs = require('./json/abiturs.json');
            res.json(abiturs.filter(x => x.city == city));    
        }
    }
);

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
POST - будет добавляться как "id": "20":
{
    "lastName": "Кумова",
    "rating": "204",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}
*/