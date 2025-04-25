const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// из этого сделать ejs
const htmlLogin = `
    <form method="POST" action="/login">
        <input type="text" name="username" placeholder="Логин">
        <input type="password" name="password" placeholder="Пароль">
        <button type="submit">Войти</button>
    </form>`;

const personalAccount = `
    <h1>Личный кабинет</h1>
    <a href="/logout">Выйти</a>`;

// = = = = = = = = = 

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const checkAuth = (req, res, next) => {
    if (!req.cookies.accessToken) { // Middleware проверки авторизации
        return res.redirect('/login');
    }
    next();
}

// из этого сделать роутер для пути /login с методами get и post
app.get('/login', (req, res) => {
    res.send(htmlLogin); // Страница входа
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'secret') {
        res.cookie('accessToken', 'secure_token_admin', {
            httpOnly: true,
            maxAge: 1 * 60 * 60 * 1000 // на один час
        });
        return res.redirect('/dashboard');
    }

    res.redirect('/login?error=1');
});

app.get('/dashboard', checkAuth, (req, res) => {
    res.send(personalAccount); // Защищенная страница
});

app.get('/logout', (req, res) => { // Выход
    res.clearCookie('accessToken');
    res.redirect('/login');
});

app.listen(3000, () => console.log(`http://localhost:3000/`));