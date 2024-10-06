const http = require('http'); // или https
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;

const infoLog = console.log(`http://${host}:${port}`);

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);
    } else {
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        let stat = stats[getRndInd()];
        console.log( stat );
        res.end( stat );
    }
}

http
    .createServer()
    .on("request", createResponse)
    .listen(port, host, () => infoLog);
