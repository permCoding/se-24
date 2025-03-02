const express = require('express'),
    app = express(),
    HOST = 'localhost', // '127.0.0.1' // [::1]
    PORT = 3000,
    // { log } = require('console'), // https://nodejs.org/api/console.html
    { writeFileSync } = require('fs'), // sync
    decache = require('decache'), // для отмены кэширования json
    filename = './json/abiturs.json';
var { log } = require("console"); 
// let index = null; // можно и через глобальную переменную
let abiturs = null; // для хранения массива данных

// app.disable('x-powered-by'); // отключить заголовки ответа

app.use(express.json()); // для распознавания объектов в post put patch

app.use((req, res, next) => { // middleware
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename);
    next();
});

/**
 * JSDocs/
 * 
 * проверка на наличие параметра  
 * что он есть число и что есть такой объект в массиве
 * @param {*} req 
 * @returns boolean
 */
const checkId = (req, res) => {
    // log(JSON.stringify(req.headers, null, 4)); // запраш язык страницы
    const methods = ['PUT', 'PATCH', 'DELETE'];
    log(req.method, req.params);
    if (methods.includes(req.method)) {
        if ((req.params.id === undefined) || (isNaN(req.params.id))) { 
            res.status(400).end();
        }
        req.index = abiturs.findIndex(x => x.id == req.params.id);
        if (req.index === -1) return res.status(404).end(); // sendStatus(404)
    } 
    return true;
}

app.get(['/abiturs','/'], (req, res) => res.json(abiturs) );

app.post('/abiturs/save/', (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    writeFileSync(filename, JSON.stringify(abiturs, null, 4), 'utf8');
    res.json(abiturs);
}); // http://[::1]:3000/abiturs/save/

app.post(['/abiturs','/'], (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект
    res.json(abiturs);
}); // http://[::1]:3000/abiturs

app.put('/abiturs/:id/', (req, res) => { 
    if (checkId(req, res)) { abiturs[req.index] = req.body };
    res.json(abiturs);
}); // http://[::1]:3000/abiturs/20

app.patch('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        abiturs[req.index] = { ...abiturs[req.index], ...req.body }; // ver1
        // abiturs[req.index] = Object.assign(abiturs[req.index], req.body) // ver2
        // ver3 циклом по переданным полям
    }
    res.json(abiturs); // http://[::1]:3000/abiturs/20
});

app.delete('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { abiturs.splice(req.index, 1) }
    res.json(abiturs);
}); // http://[::1]:3000/abiturs/20

app.delete('/abiturs/save/:id', (req, res) => { 
    if (checkId(req, res)) { abiturs.splice(req.index, 1) }
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFileSync(filename, jsonStr, 'utf8');
    res.json(abiturs);
}); // http://[::1]:3000/abiturs/20

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