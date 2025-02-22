const express = require('express');

const app = express();

app.get('/', () => console.log('express'));

app.listen(3000);
