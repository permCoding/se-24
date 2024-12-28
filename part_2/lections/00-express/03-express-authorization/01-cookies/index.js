var express = require('express'),
    cookieParser = require('cookie-parser'), // npm install cookie-parser
    app = express(),
    { readFileSync } = require('fs'),
    form = readFileSync('./form-auth.html', 'utf8'),
    log = console.log,
    password = '0000',
    host = 'localhost',
    port = 3000;

const getHM = () => {
    let dt = new Date(); // дата и время входа
    let h = dt.getHours().toString().padStart(2, '0');
    let m = dt.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
    log(req.cookies); // посмотреть куки
    log(getHM()); // тут можно смотреть сколько времени назад 
    // была авторизация и удалять устаревшие акки
    next();
});

// routing
app.post('/login', (req, res) => {
    if (req.body.password === password) {
        res.cookie('tokenUser', 'admin'); // установить куки - кто зашёл
        res.cookie('timeEntry', getHM()); // установить куки - когда зашёл
        res.redirect('/page');
    } else {
        res.redirect('/'); 
    }
});

app.get('/page', (req, res) => {
    (req.cookies.tokenUser === 'admin')
        ? res.send(`=> You're authorized`)
        : res.redirect('/')
    // можно сделать маршрутизацию в зависимости от роли пользователя
    // сделать пользователей admin и user и проверять время авторизации
    // удалять после 5 минут простоя
    // для каждого ТИПА пользователя сделать свои доступные страницы
});

app.get('/logout', (req, res) => { // logout
    res.clearCookie('tokenUser');
    res.clearCookie('timeEntry');
    res.redirect('/');
});

app.get('/', (req, res) => {
    if (req.cookies.tokenUser === undefined) {
        res.set('Content-Type', 'text/html');
        res.send(form); // иди и авторизуйся
    } else {
        res.send(`=> Success ! => ${req.cookies.tokenUser}`) // уже авторизован
    }
});

// start event loop
app.listen(port, host, () => log(`http://${host}:${port}`));

/*
- clearCookie(key) - удаляет по ключу значение у клиента, если ключ не задан - удаляет все
- cookie(key, value) - устанавливает значение по ключу
*/