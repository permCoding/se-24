// тут с выбором столбца для сортировки
const express = require('express');
const { port, host } = require('./config.json');

const app = express(); // app.use(express.json());
app.use('/css', express.static('css'));
app.set('view engine', 'ejs');

let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    res.render('index-00.ejs', { arr: arr });
});

app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(','); console.log(keys);
    let sortField = req.query.sortField; console.log(sortField);
    let model = { keys, titles, arr, sortField };
    res.render('index-04', model);
});
// http://localhost:3000/fields?keys=id,lastName,city,gender,rating&sortField=rating
// http://localhost:3000/fields?keys=id,lastName,city,gender,rating&sortField=city
// http://localhost:3000/fields?keys=lastName,city,gender&sortField=gender
// и как это сделать на web-форме
// чтобы не руками набирать поля и направления сортировки
// нужны checkboxes и radiobuttons
// а чтобы добавить нового абитуриента
// нужны поля для ввода текста и чисел

app.listen(port, console.log(`http://${host}:${port}`));
