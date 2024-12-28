var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    app = express(),
    log = console.log,
    host = 'localhost',
    port = 3000;

app.use(cookieParser());

app.get('/login', (req, res) => { // login
    if (req.cookies.tokenUser === undefined) {
        res.cookie('tokenUser', 'admin', { 
            maxAge: 30_000, // 0.5 min
            path: '/' 
        });
    }
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.send(`tokenUser: ${req.cookies.tokenUser}`);
});

app.listen(port, host, () => log(`http://${host}:${port}`)); // start event loop
