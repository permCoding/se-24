require('dotenv').config(); // npm install dotenv

const express = require('express'); // npm i express
const decache = require('decache'); // для отмены кэширования json
const fs = require('fs'); // sync

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT ?? 3000; // оператор нулевого слияния 
const dirJSON = process.env.dirJSON;
const fileName = process.env.fileName;
const filename = `${dirJSON}${fileName}`; // адрес локального хранилища

const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();

app.use(express.json()); // для распознавания объектов в post put patch

app.use((req, res, next) => { // middleware
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename);
    next();
});

const checkId = (req, res) => {
    const methods = ['PUT', 'PATCH', 'DELETE'];
    log(req.method, req.params);
    if (!methods.includes(req.method)) {
        log(req.method);
        return false; 
    } else {
        if ((req.params.id === undefined) || (isNaN(req.params.id))) { 
            log(req.params.id);
            return false;
        }
        req.index = abiturs.findIndex(x => x.id == req.params.id);
        if (req.index === -1) {
            log(req.index);
            return false;
        }
    }
    return true;
}

// http://localhost:3000/abiturs
// http://127.0.0.1:3000/abiturs
// http://[::1]:3000/abiturs
app.post('/abiturs/', (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    fs.writeFileSync(filename, JSON.stringify(abiturs, null, 4), 'utf8');
    res.json(abiturs);
}); 

app.put('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        // abiturs[req.index] = req.body; // так без id
        let id = +req.params.id;
        abiturs[req.index] = { id, ...req.body }; // так с id
        let jsonStr = JSON.stringify(abiturs, null, 4);
        fs.writeFileSync(filename, jsonStr, 'utf8');
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://localhost:3000/abiturs/20

app.patch('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        abiturs[req.index] = { ...abiturs[req.index], ...req.body }; // ver1
        // abiturs[req.index] = Object.assign(abiturs[req.index], req.body) // ver2
        // ver3 циклом по переданным полям
        let jsonStr = JSON.stringify(abiturs, null, 4);
        fs.writeFileSync(filename, jsonStr, 'utf8');
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://localhost:3000/abiturs/20

app.delete('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        abiturs.splice(req.index, 1);
        let jsonStr = JSON.stringify(abiturs, null, 4);
        fs.writeFileSync(filename, jsonStr, 'utf8');
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://localhost:3000/abiturs/20

app.get(['/abiturs','/'], (req, res) => res.json(abiturs) );

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
    для работы этой проги нужен файл .env:
# параметры для настройки приложения
appName=Express
dirJSON=./json/
fileName=abiturs.json
HOST=localhost
PORT=3000

    объекты для тестирования:
{
    "lastName": "Кумова",
    "rating": "204",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}

{ "rating": "222" }
*/