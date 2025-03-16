const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;

const log = console.log;

const app = express();

const view = '<%= lastName %>';

app.get('/', (req, res) => {
    let user = { 'id': 123, 'lastName': 'Иванов' };
    let html = ejs.render(view, user);
    log(html);

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
