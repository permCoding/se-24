const http = require('http'); // или https
const port = 3000, host = 'localhost';
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
        background-size: 25%;
        background-repeat: no-repeat;
    }
</style>
<div class='block'> I'm JavaScript </div>
`

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    if (req.method !== 'GET') { return res.end('нет обработчика\n'); }
    res.end(html);
}

const server = http.createServer();

server
    .on("request", createResponse) // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
