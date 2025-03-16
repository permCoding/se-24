const express = require('express');  // npm i express

const app = express();

app.get('/', () => console.log('express'));

app.listen(3000);
