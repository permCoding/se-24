const express = require('express');
const { port, host } = require('./config.json');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));


let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    let keys = Object.keys(titles); // тут выбираем все поля
    res.render('index-01', { titles, arr, keys });
});

// http://localhost:3000/fields?keys=id,lastName,city,gender,rating&sortField=rating
app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(','); console.log(keys);
    let sortField = req.query.sortField; console.log(sortField);
    arr.sort((a,b)=>a[sortField]>b[sortField]?+1:-1);
    res.render('index-01', { keys, titles, arr });
});

app.listen(port, console.log(`http://${host}:${port}`));
