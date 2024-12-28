const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    filename = './json/abiturs.json',
    abiturs = require(filename);

app.use(express.json()); // обязательно добавить для распознавания объектов

const middleFunction = (req, res, next) => {
    let params = req.params;
    let id = +params.id;
    if (isNaN(id)) return res.sendStatus(400);
    let idFind = abiturs.findIndex(x => x.id == id);
    if (idFind === -1) return res.sendStatus(404);
    req.id = idFind;
    next();
} // middleWare - можно добавить к запросу 

app.get(['/abiturs','/'], (req, res) => res.json(abiturs) );

app.get('/abiturs/:id', middleFunction, (req, res) => {
    res.json(abiturs[req.id]);
});

app.post('/abiturs', (req, res) => { // http://[::1]:3000/abiturs
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    res.json(abiturs);
});

app.put('/abiturs/:id', middleFunction, (req, res) => { 
    let { id, body } = req; // let body = req.body, id = req.id;
    abiturs[id] = { id, ...body };
    res.json(abiturs); // http://[::1]:3000/abiturs/20 
});

app.patch('/abiturs/:id', middleFunction, (req, res) => { 
    let { id, body } = req;
    abiturs[id] = { ...abiturs[id], ...body };
    res.json(abiturs); // http://[::1]:3000/abiturs/20
});

app.delete('/abiturs/:id', middleFunction, (req, res) => { 
    abiturs.splice(req.id, 1);
    res.json(abiturs); // http://[::1]:3000/abiturs/20
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