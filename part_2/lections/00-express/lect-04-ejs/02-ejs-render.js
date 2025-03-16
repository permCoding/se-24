const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const users = require('./json/users.json');
const log = console.log;

const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('css')); // путь к статичным файлам

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('users-02', users[0]);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
