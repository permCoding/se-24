const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log;

const { query, validationResult } = require('express-validator');

var abiturs = require('./json/abiturs.json');

app.use(express.json()); // обязательно добавить для распознавания объектов

app.get('/', (req, res) => { res.send('/') });

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
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
