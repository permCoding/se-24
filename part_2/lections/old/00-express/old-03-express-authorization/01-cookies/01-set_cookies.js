var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    app = express(),
    log = console.log,
    password = '0000',
    host = 'localhost',
    port = 3000;

// middleware functions
app.use(cookieParser());
app.use((req, res, next) => {
    log(req.cookies); // посмотреть куки
    next();
});

// routing

app.get('/logout', (req, res) => { // logout
    res.clearCookie('tokenUser');
    res.redirect('/');
});

app.get('/login', (req, res) => { // login
    if (req.cookies.tokenUser === undefined) {
        res.cookie('tokenUser', 'admin'); // установить куки - кто зашёл
        res.send(`>>> logged in now: ${req.cookies.tokenUser}`);
    } else {
        res.send(`>>> authorized: ${req.cookies.tokenUser}`) // уже авторизован
    }
});

app.get('/set', (req, res) => {
    res.cookie('curYear', 2024);
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.send(`>>> check tokenUser: ${req.cookies.tokenUser}`);
});

app.listen(port, host, () => log(`>>> http://${host}:${port}`)); // start event loop


/*
cookies - словарь - ключ-значение
- clearCookie(key) - удаляет по ключу значение у клиента, если ключ не задан - удаляет все
- cookie(key, value) - устанавливает значение по ключу
*/