const express = require('express'),
    app = express(),
    PORT = 3000,
    log = console.log,
    callbackGet = () => { log('callbackGet') },
    callbackListen = () => { log('callbackListen') }

app.get('/start', callbackGet)

app.get(['/','/index'], callbackGet)

app.listen(PORT, callbackListen)
