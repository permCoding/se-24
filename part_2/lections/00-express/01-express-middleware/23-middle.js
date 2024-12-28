const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log;

var abiturs = require('./json/abiturs.json');

app.use(express.json()); // обязательно добавить для распознавания объектов

app.get('/', (req, res) => res.send('/') );

// middleWare - можно объявлять множественно и непосредственно по месту в виде анонимов
app.get('/abiturs', 
    (req, res, next) => { next(); },
    (req, res, next) => { log(`${req.method};`); next(); },
    (req, res, next) => { log(`${req.url}`); next(); },
    (req, res, next) => { log(`${JSON.stringify(req.params)}`); next(); },
    (req, res) => res.json(abiturs) 
);

app.post('/abiturs', (req, res) => { // http://localhost:3000/abiturs
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    res.json(abiturs);
});

app.put('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params, newObj = req.body;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idUpdate = abiturs.findIndex(x => x.id == id);
    abiturs[idUpdate] = { id, ...newObj };
    res.json(abiturs);
});

app.patch('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params, partialObj = req.body;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idUpdate = abiturs.findIndex(x => x.id == id);
    
    // abiturs[idUpdate] = { ...abiturs[idUpdate], ...partialObj }; // ver1
    abiturs[idUpdate] = Object.assign(abiturs[idUpdate], partialObj) // ver2
    
    res.json(abiturs);
});

app.delete('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idDelete = abiturs.findIndex(x => x.id == id);
    if (idDelete === -1) return res.sendStatus(404); // .status(404).end()
    abiturs.splice(idDelete, 1);
    res.json(abiturs);
});

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

PUT работает как присваивание, 
то есть нужно обновлять все поля существующего объекта
кто не обновился, то потерялся
PUT - создать или заменить по id:
id == 20
{
    "lastName": "Кумова",
    "rating": "214",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}

PATCH (заплатка) - обновит указанное поле, не теряя уже существующие поля
id == 20
{ "rating": "222" }
*/