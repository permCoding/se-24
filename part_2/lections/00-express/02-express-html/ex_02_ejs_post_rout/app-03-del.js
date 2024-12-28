const express = require('express'),
    app = express(),
    { port, host } = require('./config.json');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));

let arr = require('./json/abiturs.json'); // кэшируется
let titles = require('./json/titles.json');
let keys = Object.keys(titles); // тут выбираем все поля

app.use((req, res, next) => {
    console.log(req.method, req.body, req.params); // для контроля
    next(); // тут пока нет request.params
});

app.get('/', (req, res) => {    
    res.render('index-03', { titles, arr, keys });
});

/**
 * из html работают только get и post
 * тут два способа через post
 * 1) id передаётся как параметр (так можно удалять и методом get)
 * 2) id передаётся в request.body
 */
app.post('/delete/:id', (req, res) => { // через params
    let index = arr.findIndex(x => x.id == req.params.id);
    arr.splice(index, 1); // тут команда SQL DELETE
    res.redirect('/');
});

app.post('/del/', (req, res) => { // через request.body
    let index = arr.findIndex(x => x.id == req.body.delId);
    arr.splice(index, 1); // тут команда SQL DELETE
    res.redirect('/');
});

app.listen(port, console.log(`http://${host}:${port}`));
