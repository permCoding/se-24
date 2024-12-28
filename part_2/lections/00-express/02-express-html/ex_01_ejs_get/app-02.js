// с заголовками и выбором порядка полей объектом titles - программистом
const express = require('express');
const { port, host } = require('./config.json');

const app = express();
app.use('/css', express.static('css'));
app.set('view engine', 'ejs');

let abiturs = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    res.render('index-00', { arr });
});

/**
 * программист определяет порядок вывода полей  
 * объектом titles
 * http://localhost:3000/fields?keys=gender,lastName,rating  
 * http://localhost:3000/fields?keys=rating,lastName,city 
 */
app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(',');
    let arr = JSON.parse(JSON.stringify(abiturs, keys));
    res.render('index-02', { keys, titles, arr });
});

app.listen(port, console.log(`http://${host}:${port}`));
