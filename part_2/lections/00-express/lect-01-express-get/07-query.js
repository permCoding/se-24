const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => { res.send('/ = = = = = ') });

/**
 * http://localhost:3000/abiturs/query?city=Оса&gender=1
 */
app.get('/abiturs/query', (req, res) => {
    // let params = req.params; log(params); // это которые через /:param1/:param2
    // let query = req.query; log(query); // это которые словарь ?field1=val1&field2=val2
    res.json(
        require('./json/abiturs.json')
            .filter(x => (x.city === req.query.city) && (x.gender === req.query.gender))
            .slice(0, 2)
        );
    // res.send(JSON.stringify(abiturs.filter(x => x.city === city), null, 4));
});

/**
 * http://[::1]:3000/abiturs - это для Thunder Client
 * http://localhost:3000/abiturs
 * http://localhost:3000/abiturs?city=Пермь
 * http://localhost:3000/abiturs?city=Пермь&gender=1
 */
app.get('/abiturs', (req, res) => {
    let { city, gender } = req.query; log(city, gender);
    let abiturs = require('./json/abiturs.json');

    if (!city && !gender) res.json(abiturs);
    if (!city && gender) res.json(abiturs.filter(x => x.gender == gender));
    if (city && !gender) res.json(abiturs.filter(x => x.city == city));
    if (city && gender) res.json(
        // abiturs
        //     .filter(x => x.city == city)
        //     .filter(x => x.gender == gender)
        abiturs
            .filter(x => ((x.city == city) && (x.gender == gender)) )
    );
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
