// подключение внешних зависимостей
const express = require('express');
const hbs = require('hbs');

// настройка приложения
const app = express();

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

// app.use(express.json()); // middleware for parsing Object from URL
app.use(express.urlencoded({ extended: true })); // middleware for parsing Object from URL and body from Html

app.set('view engine', 'hbs'); // npm i hbs
hbs.registerPartials(__dirname + '/views/partials');

const arr = require('./json/abiturs.json');

hbs.registerHelper('getCount', () => arr.length);

app.use((req, resp, next) => {
    console.log(req.body, req.query);
    next();
});

// маршрутизация
app.get('/', (req, res) => {
    res.render('index', { arr });
});

app.get('/getByCityGet', (req, res) => {
    res.render('index', { 
        'arr': arr.filter(x => x.city == req.query.city) 
    });
});

app.post('/getByCityPost', (req, res) => {
    res.render('index', { 
        'arr': arr.filter(x => x.city == req.body.city) 
    });
});

app.listen(3000, console.log('http://localhost:3000'));
