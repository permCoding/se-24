const express = require('express'); // npm i express
const decache = require('decache'); // для отмены кэширования json
const { writeFileSync, writeFile } = require('fs'); // для записи в json
const { HOST, PORT } = require('./config.json').hosting;
const { dirJSON, fileName } = require('./config.json');
const filename = `${dirJSON}${fileName}`; // адрес локального хранилища
const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();

app.use((req, res, next) => { // middleware
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename);
    next();
});

app.use(express.json()); // middleware для распознавания объектов

// http://localhost:3000/abitursSync
// http://127.0.0.1:3000/abitursSync
// http://[::1]:3000/abitursSync
app.post('/abitursSync', (req, res) => { 
    abiturs.push(req.body); // объект от клиента
    let strJSON = JSON.stringify(abiturs, null, 4);
    writeFileSync(filename, strJSON, {encoding: 'utf8'});
    res.json(abiturs);
});

app.post('/abiturs', (req, res) => { 
    abiturs.push(req.body);
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFile(filename, jsonStr, 'utf8', () => res.json(abiturs));
}); // http://localhost:3000/abiturs

app.get('/abiturs', (req, res) => res.json(abiturs) );

app.get('/', (req, res) => res.send('root or error') );

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