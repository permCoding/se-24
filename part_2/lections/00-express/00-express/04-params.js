const express = require('express');
const { HOST, PORT } = require('./config.json');
const log = console.log;

const app = express();

/** корневой путь приложения */
app.get('/', (req, res) => {
    res.send('/root')
});

/** все записи без обработки */
app.get('/abiturs', (req, res) => {
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs);
});

/** 
 * один параметр 
 * http://localhost:3000/abiturs/limit/2
 */
app.get('/abiturs/limit/:count', (req, res) => {
    let params = req.params; 
    log(params);
    let count = params.count;
    // let { count } = params;
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs.slice(0, count));
});

/** 
 * два параметра 
 * http://localhost:3000/abiturs/limit/2/1
 * http://localhost:3000/abiturs/limit/3/0
 */
app.get('/abiturs/limit/:count/:gender', (req, res) => {
    let params = req.params; 
    log(params);
    let { count, gender } = params;
    let filtered = require('./json/abiturs.json')
        .filter(x => x.gender == gender);
    res.json(filtered.slice(0, count));
});

app.get('/abiturs/sort/:count/:direct', (req, res) => { // direct => asc, desc
    let params = req.params;
    let { count, direct } = params;
    log(params);
    let abiturs = require('./json/abiturs.json');
    let dict = { 'asc': +1, 'desc': -1 };
    // let sorted = abiturs.sort( (a,b) => +a.rating > +b.rating? +1: -1);
    let sorted = abiturs.sort((a,b) => dict[direct] * (a.rating - b.rating));
    res.json(sorted.slice(0, count));
});

app.get('/error', (req, res) => {
    log('error');
    res.status(404).end();
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
