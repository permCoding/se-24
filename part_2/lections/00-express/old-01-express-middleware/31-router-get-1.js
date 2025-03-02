const express = require('express'), app = express();

const { host, port } = require('./config.json');

const router = require('./routes/abiturs-1.js').router;

app.use('/abiturs', router);

app.get('/', (req, res) => res.status(200).send('/') );

app.get('/*', (req, res) => res.status(404).send('404') );

app.listen(port, host, () => console.log(`http://${host}:${port}/`));
