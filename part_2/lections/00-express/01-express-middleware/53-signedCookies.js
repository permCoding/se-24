const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.use(cookieParser('secret')); // string or array used for signing cookies

app.use((req, res, next) => {
    log(req.cookies);
    log(req.signedCookies);
    next();
});

app.get('/', (req, res) => {
    res.send('/')
});

app.get('/start', (req, res) => {
    res.cookie('userRole', 'admin', 
        { maxAge: 60_000 * .5, signed: true }
    );
    res.send('/start');
}); // посмотреть в браузере - value cookie будет закрыта

app.get('/txt', (req, res) => {
    res.set('Content-Type', 'text/plain');
    if (req.signedCookies.userRole && req.signedCookies.userRole === 'admin') {
        return res.send('11\n22\n33\n44');
    }
    res.status(403).send({ msg: 'нет авторизации' });
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
