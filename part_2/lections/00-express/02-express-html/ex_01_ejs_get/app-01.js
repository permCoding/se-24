// ejs filter limit от начала и от конца массива
// с заголовками для маршрута fields по keys
// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express();
app.use('/css', express.static('css'));
app.set('view engine', 'ejs');

let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    let model = { arr };
    res.render('index-00', model); // view - представление
});

app.get('/filter', (req, res) => {
    let { query } = req;
    let model = { arr: arr.filter(x => x.city == query.city) };
    res.render('index-00', model);
}); // http://localhost:3000/filter?city=Кунгур

/**
 * keys определяет порядок вывода полей  
 * так как из объекта titles поля выбираются в порядке keys  
 * http://localhost:3000/fields?keys=lastName,rating  
 * http://localhost:3000/fields?keys=rating,lastName,city 
 */
app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(',');
    let model = { 
        keys,
        titles: JSON.parse(JSON.stringify(titles, keys)), //порядок keys
        arr: JSON.parse(JSON.stringify(arr, keys)) //порядок keys
    };
    res.render('index-01', model);
});

app.get('/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index-00', model);
}); // http://localhost:3000/5 - этот путь не мешает следующему

app.get('/limit/:limit', (req, res) => {
    let limit = req.params.limit;
    res.render('index-00', { arr: arr.slice(-limit) });
}); // http://localhost:3000/limit/5 - взять с конца массива

app.listen(3000, console.log('http://localhost:3000'));
