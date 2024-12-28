const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => {
    res.send('/')
});

app.get('/abiturs', (req, res) => {
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs);
});

app.get('/abiturs/limit/:count', (req, res) => {
    let params = req.params; 
    log(params);
    let count = params.count;
    // let { count } = params;
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs.slice(0, count));
}); // http://localhost:3000/abiturs/limit/2

app.get('/abiturs/limit/:count/:gender', (req, res) => {
    let params = req.params; 
    log(params);
    let { count, gender } = params;
    let filtered = require('./json/abiturs.json')
        .filter(x => x.gender == gender);
    res.json(filtered.slice(0, count));
}); // http://localhost:3000/abiturs/limit/2/1
    // http://localhost:3000/abiturs/limit/3/0

app.get('/abiturs/sort/:count/:direct', (req, res) => { // direct => asc, desc
    let params = req.params;
    let { count, direct } = params;
    let abiturs = require('./json/abiturs.json');
    let dict = {
        'asc': +1,
        'desc': -1
    }
    // let sorted = abiturs.sort( (a,b) => +a.rating > +b.rating? +1: -1);
    let d = direct == 'asc'? +1: -1;
    let sorted = abiturs.sort((a,b) => d * (a.rating - b.rating));

    res.json(sorted.slice(0, count));
});

app.get('/error', (req, res) => {
    log('error')
    res.status(404).end()
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
