const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log;

var abiturs = require('./json/abiturs.json');

/** 
 * этот middleWare будет выполняться при любом запросе
 * обязательно добавить для распознавания объектов
*/
app.use(express.json());

/** эти middleWare будем использовать избирательно */
const middleFunction = (req, res, next) => {
    log(`${req.method}; ${req.url}; ${JSON.stringify(req.params)}`);
    next(); // передаёт управление процессом выполнения дальше
}

/** 
 * так оформляется документирование функций JSDocs
 * эту функцию будем использовать только при
 * изменении полей существующего объекта
 * вести логгирование в консоли и в файле
*/
const mfUpdateLog = (req, res, next) => {
    let id = req.params.id;
    let partialObj = req.body;
    let msg = `mfUpdateLog; patch; id=${id}; partialObj=${JSON.stringify(partialObj)}\n`;
    log(msg);

    // v1
    require('fs').appendFileSync('info.log', msg);
    next();

    // v2
    require('fs').appendFile('info.log', msg, (err) => {
        if (err) throw err;
        next();
    });
}

app.get('/', (req, res) => res.send('/') );

app.get('/abiturs', (req, res) => res.json(abiturs) );

// http://[::1]:3000/abiturs
// http://localhost:3000/abiturs
app.post('/abiturs', (req, res) => {
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект из body
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

app.patch('/abiturs/:id', mfUpdateLog, (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params, partialObj = req.body;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idUpdate = abiturs.findIndex(x => x.id == id);
    
    // abiturs[idUpdate] = { ...abiturs[idUpdate], ...partialObj }; // ver1
    abiturs[idUpdate] = Object.assign(abiturs[idUpdate], partialObj) // ver2
    
    res.json(abiturs);
});

// middleWare - можно использовать избирательно <============
// http://localhost:3000/abiturs/20
app.delete('/abiturs/:id', middleFunction, (req, res) => { 
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