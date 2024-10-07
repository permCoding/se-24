const http = require('http'); // или https
const path = require('path');
const fs = require('fs');
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;
const FAVICON = path.join(__dirname, 'public', 'favicon.ico');

const infoLog = console.log(`http://${host}:${port}`);

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    console.log(req.url, FAVICON);
    if (path.extname(req.url) === '.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(res);
        return;
        // res.end(FAVICON);
    } else {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end( stats[getRndInd()].split('<br>').join('\n\n') );
    }
}

http
    .createServer()
    .on("request", createResponse)
    .listen(port, host, () => infoLog);
