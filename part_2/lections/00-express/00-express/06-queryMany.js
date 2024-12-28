const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    abiturs = require('./json/abiturs.json');

app.get('/', (req, res) => { res.send('/') });

app.get('/abiturs', (req, res) => {
    let query = req.query; log(query);
    let entries = Object.entries(query); log(entries);

    if (entries.length < 1) {
        res.json(abiturs); // http://localhost:3000/abiturs
    } else { // http://localhost:3000/abiturs?fieldA=valueA
        let key = entries[0][0], value = entries[0][1];
        res.json(abiturs.filter(x => x[key] == value));
    }
});

app.get('/abitursMany', (req, res) => {
    let query = req.query; log(query);
    let pairs = Object.entries(query); log(pairs);

    if (pairs.length < 1) {
        res.json(abiturs); // http://localhost:3000/abiturs
    } else {
        res.json(abiturs
            .filter(x => pairs.every(pair => x[pair[0]] == pair[1]))
        );
        // http://localhost:3000/abitursMany?gender=0
        // http://localhost:3000/abitursMany?city=Кунгур&gender=0
        // http://localhost:3000/abitursMany?city=Кунгур&gender=1&rating=196
    }
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
