const express = require('express'),
    app = express(),
    HOST = 'localhost', // '127.0.0.1' // [::1]
    PORT = 3000,
    { log } = require('console'),
    filename = './json/abiturs.json',
    abiturs = require(filename);
    // http://[::1]:3000/abiturs

app.use(express.json()); // post put patch

app.get(['/abiturs','/'], (req, res) => res.json(abiturs));

app.post(['/abiturs','/'], (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект
    res.json(abiturs);
});

app.delete(['/abiturs/:id','/:id'], (req, res) => {
    let id = +req.params.id; // тут нужна валидация
    if (id != undefined) {
        let index = abiturs.findIndex(x => x.id == id);
        abiturs.splice(index, 1);
    }
    res.json(abiturs);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
// https://developer.mozilla.org/en-US/docs/Web/