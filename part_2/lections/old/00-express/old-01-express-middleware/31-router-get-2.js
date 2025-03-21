const express = require('express'), app = express();

const { host, port } = require('./config.json');

app.use(express.json()); // если есть post put patch

app.use(require('./routes/abiturs-2.js'));

app.listen(port, host, () => console.log(`http://${host}:${port}/`));
