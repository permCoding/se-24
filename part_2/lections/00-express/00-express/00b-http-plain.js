const http = require('http'); // или https
const port = 3000, host = 'localhost';
const { readFileSync } = require('fs');

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    if (req.method !== 'GET') { 
        return res.end('нет обработчика\n'); 
    }
    
    res.end(readFileSync(__filename, {encoding:'utf8'}));
}

const server = http.createServer();

server
    .on("request", createResponse) // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
