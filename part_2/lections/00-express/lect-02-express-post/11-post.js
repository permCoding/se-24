const express = require('express'); // npm i express
const { writeFileSync, writeFile } = require('fs'); // для записи в json
const { HOST, PORT } = require('./config.json').hosting;
const { dirJSON, fileName } = require('./config.json');
const filename = `${dirJSON}${fileName}`; // адрес локального хранилища
const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();

app.use((req, res, next) => { // middleware
    abiturs = require(filename); // в JS регистр имеет значение
    next();
});

app.use(express.json()); // middleware для распознавания объектов

app.get('/abiturs', (req, res) => res.json(abiturs) );

// http://localhost:3000/abiturs
// http://127.0.0.1:3000/abiturs
// http://[::1]:3000/abiturs
app.post('/abiturs', (req, res) => { 
    log(req.body); // проверить через POSTMAN или Thunder Client
    res.status(200).end(); // сам объект пока никуда не добавляем
});

app.post('/abitursPush', (req, res) => { // без сохранения
    abiturs.push(req.body); // объект от клиента
    res.status(201).json(abiturs); // запрос был успешно выполнен и был создан новый ресурс
    // но пока без сохранения в файл
}); // http://localhost:3000/abitursPush

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