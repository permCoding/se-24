var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    app = express(),
    log = console.log,
    host = 'localhost',
    port = 3000;

app.use(cookieParser());

app.get('/login', (req, res) => { // login
    if (req.cookies.tokenUser === undefined) {
        res.cookie('tokenUser', 'user', { 
            maxAge: 60_000, // 1 min
            path: '/user'
        });
    }
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}`);
});

app.get('/admin', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}`);
});

app.get('/user', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}, ${req.url}`);
});

app.get('/user/1', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}, ${req.url}`);
});

app.get('/user/2', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}, ${req.url}`);
});

app.listen(port, host, () => log(`http://${host}:${port}`)); // start event loop
