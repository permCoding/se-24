const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;
const log = console.log;
const idProg = Math.trunc(Math.random() * 100_000);

app.use(cookieParser());

app.get('/d/:delay', async (req, res) => {
    res.set({
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Encoding': 'utf-8',
    });

    let delay = +req.params.delay * 1_000;
    res.write(`idProg = ${idProg} <br>`);
    res.write(`delay = ${delay} <br>`);

    await new Promise(resolve => setTimeout(resolve, delay));
    
    res.write(`Запрос от ${req.ip} обработан`);
    res.send();
});

app.get('/', (req, res) => {
    res.cookie('userRole', 'admin', { maxAge: 600_000 });
    res.send();
});

app.get('/set', (req, res) => {
    res.cookie('myCookie', 'Hello', { maxAge: 30_000 });
    res.send('Cookie установлен!');
});

app.get('/get', (req, res) => {
    const myCookieValue = req.cookies.myCookie;
    if (myCookieValue) {
        res.send(`Значение cookies myCookie: ${myCookieValue}`);
    } else {
        res.send('Cookie myCookie не существует!');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});