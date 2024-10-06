const http = require('http'); // или https
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;

const html = `
    <style>
        .block {
            font-size: 40px;
            height: 85%;
            width: 100%;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #5e5e5e;
        }
    </style>
    <div class='block'> POST </div>
`

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end( html.replace('POST', stats[getRndInd()]) );
}

const server = http.createServer();

server
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
