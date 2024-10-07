const http = require('http'); // или https
const port = 3000, host = 'localhost';
const server = http.createServer();


server.on("request", (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    res.end('JavaScript\nPython');
});

server.listen(port, host);

// server.listen(port, host, () => console.log(`http://${host}:${port}`));

// res.setHeader('Content-Type', 'text/html; charset=utf8');
// res.end('JavaScript<br>Python');