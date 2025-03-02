const express = require('express');
const { HOST, PORT } = require('./config.json');
const log = console.log;

const app = express();

app.use((req, res, next) => {
    log(req.url.split('/'));
    next();
}); // middleware

app.get('/', (req, res) => {
    res.send('/===============')
});

app.get(['/txt','/text'], (req, res) => {
    res.set('Content-Type', 'text/plain');
    let txt = `${req.url}\n- 111\n- 222\n- 333\n- 444\n`;
    res.send(txt)
});

app.get('/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    let html = '- 111<br>- 222<br>- 333<br>- 444<br>';
    res.send(html);
});

app.get('/json', (req, res) => {
    res.set('Content-Type', 'text/plain');
    let obj = { id: 101, user: 'solver' };
    res.send(JSON.stringify(obj, null, 4));
});

app.get('/json/:num', (req, res) => { // /json/202
    let arr = [ 
        { id: 102, user: 'answer-102' }, 
        { id: 302, user: 'answer-302' }
    ];
    let obj = arr.find(x => x.id == req.params.num);
    res.json(obj);
}); // как быть, есть номер НЕ найден ?

const getHtml = (msg) => {
    return `
        <style>
            .error {
                font-size: 40px;
                height: 35%;
                width: 100%;
                position: fixed;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #5e6e5e;
            }
        </style>
        <div class='error'> ${msg} </div>`
}

app.get('/error', (req, res) => {
    log('error = 404');
    // res.status(404).end()
    let msg = 'incorrect address - error 404'
    res.status(404).send(getHtml(msg));
});

app.get('/*', (req, res) => res.redirect('/error'));

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
