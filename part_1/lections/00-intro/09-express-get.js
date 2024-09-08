const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    callbackGet = (req, resp) => { resp.send(' = callback = \nGet') },
    callbackListen = () => { console.log(`http://${HOST}:${PORT}/`) }

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);
