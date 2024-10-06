const http = require('http'); // или https
const path = require('path');
const fs = require('fs');
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;
const FAVICON = path.join(__dirname, 'public', 'favicon.ico');

const infoLog = console.log(`http://${host}:${port}`);

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    // console.log(req.url);
    if (path.extname(req.url) === '.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(res); return;
        // res.end(FAVICON);
    } else {
        let stat = stats[getRndInd()];
        if (req.url === '/plain') {
            res.setHeader('Content-Type', 'text/plain; charset=utf8');
            res.end( stat.split('<br>').join('\n\n') );
        } else {
            const html = require('fs').readFileSync('03.html', {encoding:'utf8'});
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end( html.replace('POST', stat) );
        }
    }
}

http
    .createServer()
    .on("request", createResponse)
    .listen(port, host, () => infoLog);

// var options = {
//     host: 'localhost'
// };

// http.get(options, function (http_res) {
//     var data = "";
//     http_res.on("data", function (chunk) { data += chunk; });
//     http_res.on("end", function () { console.log(data); });
// });