// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express();
// app.use(express.json()); // это нужнО для req.body

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.set('view engine', 'hbs'); // npm i hbs
app.set('views', 'viewsHBS');

// паттерн проектирования MVC

// model data - модель данных
const arr = require('./json/abiturs.json');

// controllers - обработчики событий
app.get('/', (req, res) => {
    res.render('index.hbs', { arr }); // view - представление
});

app.get('/getByCity', (req, res) => {
    console.log(req.body, req.query);
    let model = { 'arr': arr.filter(x => x.city == req.query.city) };
    res.render('index.hbs', model); // view - представление
});

app.get('/filter', (req, res) => {
    let { query } = req;
    let model = { arr: arr.filter(x => x.city == query.city) };
    res.render('index', model);
}); // http://localhost:3000/filter?city=Кунгур

app.get('/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index', model);
}); // http://localhost:3000/3

// запуск приложения
app.listen(3000, console.log('http://localhost:3000'));
