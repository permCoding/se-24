const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;

const app = express();

const view = '<%= lastName %>';

app.get('/', (req, res) => {
    let user = { 'id': 123, 'lastName': 'Иванов' };
    let html = ejs.render(view, user);
    console.log(html);

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
