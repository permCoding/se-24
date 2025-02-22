const express = require('express');
const fs = require('fs');
const filePath = './counter.log';
const log = console.log;

const { HOST, PORT } = require('./config.json');

const app = express();

const writeCurTime = () => {
    const tm = new Date();
    fs.appendFile(filePath, `${tm}\n`, (err) => {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
        } else {
            console.log('Запись добавлена успешно!');
        }
    });
}

const callbackGet = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.write('<font face="Courier New" size=2>')
    fs
        .readFileSync(filePath, 'utf8')
        .split('\n')
        .forEach(line => res.write(`${line}<br>`));
    res.write(`${'= '.repeat(9)}`);
    
    res.write('</font>')
    res.send();
};

const callbackListen = () => { 
    log(`http://${HOST}:${PORT}/`);
    writeCurTime();
};

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);
