var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    session = require('express-session'),
    app = express(),
    { readFileSync } = require('fs'),
    form = readFileSync('./form-auth.html', 'utf8'),
    log = console.log,
    passwords = require('./json/pass.json'),
    host = 'localhost',
    port = 3000,
    sess = { secret: 'mySession', cookie: { } }

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sess));
app.use((req, res, next) => {
    log(req.session); // посмотреть куки сессии для контроля
    next();
});

// можно проверить - закрыть страницу и вернуться на страницу page
// если сессия не истекла - то покажет кто авторизован
// routing
app.post('/login', (req, res) => {
    req.session.message = 'login';
    req.session.timeOfEntry = 'time';
    if ((req.body.login !== undefined) && ((req.body.password !== undefined))) {
        log(req.body.login); log(Object.keys(passwords));
        if (Object.keys(passwords).includes(req.body.login)) {
            if (req.body.password === passwords[req.body.login]) { // или хэши
                req.session.tokenUser = req.body.login;
                req.session.cookie.maxAge = req.body.login == 'admin'? 24*60*60_000: 30_000;
                req.session.message = req.body.login; // для контроля
                req.session.timeOfEntry = req.session.cookie._expires; // для контроля
                res.redirect('/page');
            } else {
                log('>>> пароль не тот');
                
                res.redirect('/'); // пароль не тот 
            }
        } else {
            log('>>> нет такого пользователя');
            res.redirect('/'); // нет такого пользователя
        }
    } else {
        log('>>> не ввёл логин или пароль');
        res.redirect('/'); // не ввёл логин или пароль
    }
});

app.get('/page', (req, res) => {
    (req.session.tokenUser !== undefined)
        ? res.send(`You're authorized => ${req.session.tokenUser}, ${req.session.cookie._expires}`)
        : res.redirect('/') // пока никто не авторизован
});

app.get('/del', (req, res) => { // logout
    req.session.destroy(); // покинуть сессию
    res.redirect('/');
});

app.get('/test', (req, res) => { // проверим кто авторизован
    res.send(`Page test, authorized => ${req.session.tokenUser}, ${req.session.cookie._expires}`)
});

app.get('/', (req, res) => {
    if (req.session.tokenUser === undefined) {
        res.set('Content-Type', 'text/html');
        res.send(form); // форма авторизации
    } else {
        res.send(`You're authorized => ${req.session.tokenUser}, ${req.session.cookie._expires}`);
    }
});

app.listen(port, host, () => log(`http://${host}:${port}`)); // start event loop

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