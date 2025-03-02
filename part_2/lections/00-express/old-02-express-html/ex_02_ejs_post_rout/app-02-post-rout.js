const express = require('express'),
    app = express(),
    { port, host } = require('./config.json'),
    rt_fields = require('./routers/rout_fields'),
    rt_new = require('./routers/rout_new');

global.abiturs = require('./json/abiturs.json');
global.titles = require('./json/titles.json');

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rt_fields);
app.use('/abiturs/new', rt_new);

app.listen(port, console.log(`http://${host}:${port}`));
