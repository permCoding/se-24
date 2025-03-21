// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express(); // app.use(express.json());
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.set('view engine', 'hbs'); // npm i hbs

// паттерн проектирования MVC

// model data - модель данных
const arr = require('./json/abiturs.json');

// controllers - обработчики событий
app.get('/', (req, res) => {
    let model = { 
        'arr': arr,
        'id': 10,
        'lab': '03'
    };
    res.render('index.hbs', { 
        'arr': arr,
        'id': 10,
        'lab': '03'
    }); // view - представление
});

app.get('/filter', (req, res) => {
    let { query } = req;
    let model = { arr: arr.filter(x => x.city == query.city) };
    res.render('index', model);
}); // http://localhost:3000/filter?city=Кунгур

app.get('/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index', model);
}); // http://localhost:3000/8

// запуск приложения
app.listen(3000, console.log('http://localhost:3000'));
