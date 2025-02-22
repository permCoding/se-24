const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log;

const getCurTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Месяцы начинаются с 0
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const callbackGet = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`${'<h3>'}${getCurTime()}${'</h3>'}`);
    res.send();
};

const callbackListen = () => { 
    log(`http://${HOST}:${PORT}/`);
    log(getCurTime());
};

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);
