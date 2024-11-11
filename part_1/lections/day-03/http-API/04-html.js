const http = require('http'); // или https
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;

const html = require('fs').readFileSync('04.html', {encoding:'utf8'});

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    // req.url
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    // res.end( html );
    res.end( html.replace('POST', stats[getRndInd()]) );
}

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
