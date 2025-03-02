const express = require('express'); // npm i express
const decache = require('decache'); // для отмены кэширования json
const fs = require('fs');
const { HOST, PORT } = require('./config.json').hosting;
const { dirJSON, fileName } = require('./config.json');
const filename = `${dirJSON}${fileName}`; // адрес локального хранилища
const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();
/**
 * минимизация возвращаемых данных
 * сокрытие технологий реализации
 * снижение рисков взлома
 */
app.disable('x-powered-by'); // отключить заголовки ответа


// логгирование действий пользователя
const logging = (req, res, next) => {
    // let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // let url = req.url; // включает и query - если есть
    let path = req.path; // маршрутизация
    let msg = `path=${path};obj=${JSON.stringify(req.body)}`;
    log(msg);

    // v1
    // fs.appendFileSync('app.log', msg+'\n');
    // next();

    // v2
    fs.appendFile('app.log', msg+'\n', (err) => {
        if (err) throw err;
        next();
    });
}

app.use((req, res, next) => { // middleware
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename); // получаем данные
    next();
});

app.use(express.json()); // middleware для распознавания объектов

app.get('/abiturs', (req, res) => res.json(abiturs) );

// http://localhost:3000/abitursPush
// http://127.0.0.1:3000/abitursPush
// http://[::1]:3000/abitursPush
app.post('/abitursPush', logging, (req, res) => { // без сохранения
    let obj = req.body; // объект от клиента
    abiturs.push(obj);
    abiturs.at(-1).id = abiturs.length;
    
    let jsonStr = JSON.stringify(abiturs, null, 4);
    fs.writeFile(filename, jsonStr, 'utf8', () => 
        res.status(201).json(abiturs)
    );
});

app.get('/', (req, res) => res.send('\root or error') );

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
    {
        "id": "20",
        "lastName": "Кумова",
        "rating": "204",
        "gender": "0",
        "birthDate": "2002-05-13",
        "city": "Лысьва"
    }
*/