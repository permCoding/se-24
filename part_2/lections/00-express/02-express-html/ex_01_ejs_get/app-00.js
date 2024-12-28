// ejs filter limit без заголовков
// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express(); // app.use(express.json());
app.use('/css', express.static('css'));
app.use('/apps', express.static('apps'));
app.set('view engine', 'ejs'); // npm i ejs

// паттерн проектирования MVC

// model data - модель данных
let arr = require('./json/abiturs.json');

// controllers - обработчики событий
app.get('/', (req, res) => {
    let model = { 
        arr: arr,
        id: 102,
        "qweqe": ""
    };
    res.render('index-00.ejs', model); // view - представление
});

app.get('/filter', (req, res) => {
    // let { query } = req;
    let query = req.query; console.log(query);
    let model = { arr: arr.filter(x => x.city == query.city) };
    res.render('index-00', model);
}); // http://localhost:3000/filter?city=Кунгур

app.get('/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index-00', model);
}); // http://localhost:3000/10

// запуск приложения
app.listen(3000, console.log('http://localhost:3000'));
