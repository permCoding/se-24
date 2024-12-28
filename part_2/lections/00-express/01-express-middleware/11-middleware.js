const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    abiturs = require('./json/abiturs.json'),
    arr = [];

// http://localhost:3000/json
// http://localhost:3000/
// http://localhost:3000/last
// http://localhost:3000/abiturs
// http://localhost:3000/error

const mfLogStart = (req, res, next) => { 
    log('\n\n==> start app <==\n'); 
    next(); 
}

const mfLogUrl = (req, res, next) => { // middleFunction
    log(`method=${req.method}; url=${req.url}`); // логирование
    next();
}

app.use(mfLogStart); // использовать при каждом запросе
app.use(mfLogUrl); // использовать при каждом запросе
    
app.use('/*', (req, res, next) => { // mf callback
    arr = [];
    arr.push(abiturs[0]);
    log('/*0:', arr);
    // res.send(arr);
    next(); // продолжать
});

app.use('/*', (req, res, next) => {
    arr.push(abiturs[1]);
    log('/*1:', arr);
    // res.send(arr);
    next(); // продолжать
});

app.get('/', (req, res) => {
    arr = [...arr, ...arr];
    log('/:', arr);
    res.json(arr); // тут заканчивается выполнение маршрута
});

app.get('/', (req, res) => {
    log('== the end =='); // сюда НЕ доходит
});

app.get('/last', (req, res) => {
    arr.push(abiturs.at(-1));
    log('/last:', arr);
    res.json(arr); // дальше НЕ проходит
});

const mfLogArr = (req, res, next) => {
    log('mfLogArr :', arr);
    next();
}

app.use(mfLogArr); // использовать при каждом запросе

app.get('/abiturs', (req, res) => res.json(abiturs) );

const mfLogError = (req, res, next) => {
    log(`${req.method}; ${req.url}; ==> error`); // логирование
    next();
}

app.get('/error', mfLogError, (req, res) => {
    res.status(404).send('error <br> 404');
});

// app.get('/*', (req, res) => res.redirect('/error')); // v1
// app.use('/*', (req, res) => res.redirect('/error')); // v2
app.use((req, res) => res.redirect('/error')); // v3

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
