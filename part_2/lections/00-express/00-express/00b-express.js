const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('express');
    res.send('express');
});

app.listen(3000);
