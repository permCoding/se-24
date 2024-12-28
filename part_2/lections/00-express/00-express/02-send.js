const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    callbackGet = (req, resp) => { resp.send(' = callback = \nGet') },
    callbackListen = () => { log(`http://${HOST}:${PORT}/`) }

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);
