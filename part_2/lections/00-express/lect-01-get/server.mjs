import { createServer } from 'node:http'; // this file - server.mjs

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on - http://127.0.0.1:3000/');
}); // run with `node server.mjs`

