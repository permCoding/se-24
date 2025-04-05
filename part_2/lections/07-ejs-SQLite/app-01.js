const express = require('express');
const { HOST, PORT } = require('./config.json').hosting;

const app = express();

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/postUser', require('./routers/routerPostUser'));
app.use(['/getUsers','/'], require('./routers/routerGetUsers'));

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
