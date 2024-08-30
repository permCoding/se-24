const express = require('express'); // npm i express

const app = express();

const style = `
<style>
    .block { 
        font-size: 32px;
        text-align: center;
    }
</style>
`;

app.get('/', (req, res) => {
    const getFull = (x) => {
        if (x>10) return x;
        return '0' + x;
    }
    let hs = getFull(new Date().getHours());
    let ms = getFull(new Date().getMinutes());
    let ss = getFull(new Date().getSeconds());
    res.set('Content-Type', 'text/html');
    res.write(style);
    res.end(`<div class="block">time = ${hs}:${ms}:${ss}</div>`)
});

app.listen(3000); // http://localhost:3000/