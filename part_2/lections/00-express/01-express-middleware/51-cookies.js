const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    str = '11 22 33 44'

app.use((req, res, next) => {
    log(req.headers.cookie);
    next();
});

app.get('/', (req, res) => {
    res.send('/')
});

app.get('/start', (req, res) => {
    res.cookie('userRole', 'admin', { maxAge: 60_000 * .5 });
    res.send('/start')
});

app.get('/txt', (req, res) => {
    res.set('Content-Type', 'text/plain');
    let txt = str.split(' ').join('\n');
    res.send(txt)
});

app.get('/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    let html = str.split(' ').join('<br />');
    res.send(html);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
