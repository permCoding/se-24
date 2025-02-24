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
    let arrCurTime = getCurTime().split(' ');
    res.write(`<h3>${arrCurTime[0]}</h3> <br>`);
    res.write(`<h5>${arrCurTime[1]}</h5>`);
    res.send();
};

const callbackListen = () => { 
    log(`http://${HOST}:${PORT}/`);
    log(getCurTime());
};

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);
