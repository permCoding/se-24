const http = require('http'); // или https
const path = require('path');
const fs = require('fs');
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;
const FAVICON = path.join(__dirname, 'public', 'favicon.ico');

const infoLog = console.log(`http://${host}:${port}`);

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    // console.log(req.url);
    if (path.extname(req.url) === '.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(res); return;
        // res.end(FAVICON);
    } else {
        let stat = stats[getRndInd()];
        if (req.url === '/plain') {
            res.setHeader('Content-Type', 'text/plain; charset=utf8');
            res.end( stat.split('<br>').join('\n\n') );
        } else {
            const html = require('fs').readFileSync('04.html', {encoding:'utf8'});
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end( html.replace('POST', stat) );
        }
    }
}

http
    .createServer()
    .on("request", createResponse)
    .listen(port, host, () => infoLog);

/*
Задание 1. 

- попробуйте сделать в API приложения запрос такого вида:  
http://localhost:3000/num/X
- где X - это целое число от 0 до 99,
в ответ на такой запрос - приложение возвращает
html-страницу с цитатой из массива цитат именно 
с этим индексом, который ввёл в запросе пользователь

- если пользователь ввёл номер некорректно, 
то возвращается рандоманя цитата

Задание 2
Пусть приложение 1 запущено. 
Создайте второе приложение, которое будет собирать 
все цитаты из первого путём выполнения
последовательных запросов (от 0 до 99)
и сохранит их в json файле в виде объекта
с одним полем, которое будет хранить массив цитат. 
*/