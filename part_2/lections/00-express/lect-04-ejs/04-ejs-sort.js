const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const users = require('./json/users.json');
const log = console.log;

const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.get('/down', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    let model = { 
        "arrayUsers": users.sort((a, b) => a.rating > b.rating? -1: +1) 
    };
    res.render('users-04', model);
});

app.get(['/up','/'], (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    let model = { 
        "arrayUsers": users.sort((a, b) => a.rating > b.rating? +1: -1) 
    };
    res.render('users-04', model);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
