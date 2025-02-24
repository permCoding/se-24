const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('express');
    let br = '<br>';
    res.write(`express1${br}`);
    res.write('express2');
    res.send();
});

app.listen(3000);
