const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;
const FAVICON = path.join(__dirname, 'public', 'favicon.ico'); // './public/favicon__.ico';
const html = fs.readFileSync('./views/select.html', {encoding:'utf8'});

const sendRandom = (req, res) => {
    let rndInd = Math.floor( stats.length * Math.random() );
    res.end( html.replace('POST', stats[rndInd]) );
}

const sendIcon = (res) => {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream(FAVICON).pipe(res); return;
}

const sendByNumber = (req, res) => {
    const [par, value] = req.url.split('?')[1].split('=');
    res.end( html.replace('POST', stats[value]) );
}

const sendSortByField = (req, res) => {
    const params = req.url.split('?')[1].split('&');
    console.log(`params = ${params}`);
    res.end( `<H3> params = ${params} </H3>` );
}

const sendHtmlByQuery = (req, res) => {
    let query = req.url.split('?')[0].split('/').at(-1);
    console.log(`query = ${query}`)
    switch (query) {
        case 'getByNumber':
            sendByNumber(req, res);
            break;
        case 'sortBy':
            sendSortByField(req, res);
            break;
        default:
            sendRandom(req, res);
            break;
    }
}

const sendHtml = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    console.log(req.url);
    if (req.url == '/') {
        sendRandom(req, res);
    } else {
        sendHtmlByQuery(req, res);
    }
}

const createResponse = (req, res) => {
    if (path.extname(req.url) === '.ico') {
        sendIcon(res);
    } else {
        sendHtml(req, res);
    }
}

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
