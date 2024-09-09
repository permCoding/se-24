const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    callbackGet = (req, resp) => { resp.send(' = callback = \nGet') },
    callbackAbout = (req, resp) => { resp.send(' = callback = \nAbout') },
    callbackJS = (req, resp) => { 
        resp.set('Content-Type', 'text/html');
        let html = require('fs').readFileSync('08.html', {encoding:'utf8'});
        resp.send(html);
    },
    callbackListen = () => { console.log(`http://${HOST}:${PORT}/`) }

app.get('/', callbackGet);
app.get('/about', callbackAbout);
app.get('/js', callbackJS);

app.listen(PORT, HOST, callbackListen);
