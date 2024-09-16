const http = require('http'); // или https
const port = 3000, host = 'localhost';
const { readFileSync } = require('fs');

let html = readFileSync('08.html', {encoding:'utf8'});
// console.log(html);
// let html = `
// <style>
//     .block {
//         font-size: 40px;
//         height: 85%;
//         width: 100%;
//         position: fixed;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: #5e5e5e;
//         background-size: 25%;
//         background-repeat: no-repeat;
//     }
// </style>
// <div class='block'> I'm JavaScript </div>
// `

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(html, 'utf-8');
}

const server = http.createServer();

server
    .on("request", createResponse) // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));

/*
let mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
};
*/