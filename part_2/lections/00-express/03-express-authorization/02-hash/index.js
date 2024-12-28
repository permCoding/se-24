const express = require('express'),
    app = express(),
    session = require('express-session'),
    md5 = require('md5'),
    log = console.log,
    sessionTime = 1 * 60_000, // 1 мин
    hashPassword = '4a7d1ed414474e4033ac29ccb8653d9b' // это 0000
    // в БД храним не сам пароль, а его хеш

const host = 'localhost', port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'tasks' }));

let form = '\
    <form> \
        <input type="password" id="pass" name="password" minlength="1" required> <br> \
        <button id="send_pass" formaction="/login" formmethod="post" type="submit"> \
            input password \
        </button> \
    </form>';

app.get(['/login','/'], (req, res) => {
    (req.session.user !== undefined)
        ? res.send(`=> Success ! => ${req.session.cookie.maxAge}`)
        : res.send(form)
});
    
app.post('/login', (req, res) => {
    if (md5(req.body.password) !== hashPassword) { // сравниваются хэши
        res.redirect('/'); 
    } else {
        req.session.user = 'admin';
        req.session.cookie.maxAge = sessionTime;
        log(req.session)
        // удалить можно в браузере - F12 / Application / Storage / Coocies
        res.redirect('/home'); // авторизован успешно
    }
});

app.get('/home', (req, res) => {
    log(req.session.user);
    (req.session.user !== 'admin')
        ? res.redirect('/login')
        : res.send(`=> You're authorized => ${req.session.cookie.maxAge}`)
});

app.listen(port, host, () => log(`http://${host}:${port}`));
