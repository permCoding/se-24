var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    app = express(),
    { readFileSync } = require('fs'),
    form = readFileSync('./form-auth.html', 'utf8'),
    log = console.log,
    password = '0000',
    host = 'localhost',
    port = 3000;

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
    log(req.cookies); // посмотреть куки
    next();
});

// routing
app.post('/login', (req, res) => {
    if (req.body.password === password) {
        res.cookie('tokenUser', 'admin', { 
            maxAge: 60_000, // 1 min
            path: '/' 
        });
        res.redirect('/page');
    } else {
        res.redirect('/'); 
    }
});

app.get('/page', (req, res) => {
    (req.cookies.tokenUser !== undefined)
        ? res.send(`You're authorized => ${req.cookies.tokenUser}`)
        : res.redirect('/')
});

app.get('/logout', (req, res) => { // logout
    // res.clearCookie('tokenUser');
    for (var prop in req.cookies) {
        if (!req.cookies.hasOwnProperty(prop)) { continue; }
        res.cookie(prop, '', { expires: new Date(0) });
    }
    res.redirect('/');
});

app.get('/', (req, res) => {
    if (req.cookies.tokenUser === undefined) {
        res.set('Content-Type', 'text/html');
        res.send(form); // иди и авторизуйся
    } else {
        res.send(`You're authorized => ${req.cookies.tokenUser}`);
    }
});

// start event loop
app.listen(port, host, () => log(`http://${host}:${port}`));

/*
необязательным третьим параметром можно передать 
объект настроек со следующими свойствами:

maxAge - определяет сколько времени (в миллисекундах) браузер должен хранить куку до ее автоматического удаления
httpOnly - булевое значение, установка в true означает, что файлы будут изменяться только сервером
signed - булевое значение, если true, то cookie-файл будет подписан
domain - управляет поддоменами, на которых могут использоваться cookie
path - описание маршрута, на который распространяется действие cookie
secure - булевое значение, если true, то файлы будут отправляться только по протоколу HTTPS

примеры:

установим куку для всех страниц сайта:

res.cookie('token', 'user', {
	path: '/',
});

res.cookie('tokenUser', 'keyUser', {
    maxAge: 60_000,
    secure: true,
});

https://code.mu/ru/javascript/nodejs/book/express/cookie/options/
*/