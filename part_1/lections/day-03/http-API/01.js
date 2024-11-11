const http = require('http'); // или https
const port = 3000, host = 'localhost'; // 127.0.0.1
const server = http.createServer();

const callback = (req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.end('JavaScript<br>Python');
}

server.on("request", callback);

server.listen(port, host, () => console.log(`http://${host}:${port}`));


// server.listen(port, host);

// res.setHeader('Content-Type', 'text/html; charset=utf8');
// res.end('JavaScript<br>Python');

// localhost:3000/awei?qweqw=1212@asfa=wewef