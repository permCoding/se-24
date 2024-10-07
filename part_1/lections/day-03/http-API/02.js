const http = require('http'); // или https
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;


const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    let stat = stats[getRndInd()];
    console.log(stat);
    res.end(stat);
}

const infoLog = () => console.log(`http://${host}:${port}`)

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, infoLog);
