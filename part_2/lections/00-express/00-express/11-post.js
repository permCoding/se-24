const express = require('express'), // npm i express
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    abiturs = null, // для хранения массива данных
    { writeFileSync, writeFile } = require('fs'), // для записи в json
    decache = require('decache'), // для отмены кэширования json
    filename = './json/abiturs.json';

// app.disable('x-powered-by'); // отключить заголовки ответа

app.use((req, res, next) => { // middleware
    // log(JSON.stringify(req.headers, null, 4)); // запраш язык страницы
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename);
    next();
});

app.use(express.json()); // middleware для распознавания объектов

app.get('/', (req, res) => res.send('/ = = = = ') );

app.get('/abiturs', (req, res) => res.json(abiturs) );

// http://localhost:3000/abiturs
// http://127.0.0.1:3000/abiturs
// http://[::1]:3000/abiturs
app.post('/abiturs', (req, res) => { 
    log(req.body); // проверить через POSTMAN или Thunder Client
    res.status(201).end();
}); // http://localhost:3000/abiturs

app.post('/abitursNew', (req, res) => { 
    abiturs.push(req.body); // объект от клиента
    res.json(abiturs);
}); // http://localhost:3000/abitursNew

app.post('/abitursSaveSync', (req, res) => { 
    abiturs.push(req.body);
    let strJSON = JSON.stringify(abiturs, null, 4);
    writeFileSync(filename, strJSON, {encoding: 'utf8'});
    res.json(abiturs);
}); // http://localhost:3000/abitursSaveSync

app.post('/abitursSave', (req, res) => { 
    abiturs.push(req.body);
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFile(filename, jsonStr, 'utf8', () => res.json(abiturs)); 
    // http://localhost:3000/abitursSave
});

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