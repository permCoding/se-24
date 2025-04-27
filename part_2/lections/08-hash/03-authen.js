const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// добавить файл style.css

// из этого сделать login.ejs
const htmlLogin = `
    <form method="POST" action="/login">
        <input type="text" name="username" placeholder="Логин">
        <input type="password" name="password" placeholder="Пароль">
        <button type="submit">Войти</button>
    </form>`;

// из этого сделать dashboard.ejs
const personalAccount = `
    <h1>Личный кабинет</h1>
    <h3>меню 1</h3>
    <h3>меню 2</h3>
    <h3>меню 3</h3>
    <br>
    <h4><a href="/logout">Выйти</a></h4>`;

// = = = = = = = = = 

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const checkAuth = (req, res, next) => {
    if (!req.cookies.accessToken) { // Middleware для аутентификации
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
            maxAge: 2 * 60 * 60 * 1000 // на один час
        });
        return res.redirect('/dashboard');
    }

    res.redirect('/login?error=1');
});

// из этого сделать роутер для пути /dashboard
app.get('/dashboard', checkAuth, (req, res) => {
    res.send(personalAccount); // Защищенная страница
});

// из этого сделать роутер для выхода из личного кабинета
app.get('/logout', (req, res) => { // Выход
    res.clearCookie('accessToken');
    res.redirect('/login');
});

app.listen(3000, () => console.log(`http://localhost:3000/`));

/**
 * проект 1 - Личный кабинет - это задание на лабораторку
 * 
 * выполнить проект с аутентификацией пользователя через куки браузера
 * данные пусть хранятся в базе данных SQLite, БД создайте заранее
 * и заранее впишите туда userLogin и userPassword
 * только пароль пусть хранится в виде хэша
 * то есть в этом проекте не будет возможности у пользователя пройти регистрацию
 * зарегистрировать пользователя может только админ, сам вписав его логин и пароль
 * путь в БД хранится не только логин и пароль пользователя, но и его Фамилия
 * и после аутентификации пусть в личном кабинете отображается его Фамилия
 * создайте необходимые модули с Роутерами, Представлениями и файл с таблицей стилей css
 *  
 * для реализации можно использовать:
 * - файлы из текущей Лекции (для хэширования и сравнения паролей, для аутентификации)
 * - файлы из предыдущих Лекций (где была реализация паттерна MVC)
 */