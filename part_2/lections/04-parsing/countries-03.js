const request = require('sync-request');
const cheerio = require('cheerio');

const log = console.log;

const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';

const options = { headers: { 'User-Agent': ua } };

const get_html = (url) => {
    let res = request('GET', url, options);
    return res.getBody('utf8'); // html
}

const get_data = (url) => {
    try {
        const html = get_html(url);
        const $ = cheerio.load(html);

        const trs = $('#study-dataset')
            .find('.table')
            .find('tbody')
            .find('tr');

        let results = [];
        trs
            .each((i, tr) => {
                let tds = []
                $(tr)
                    .find('td')
                    .each((i,e) => tds.push($(e).html()));
                let obj = {
                    "id": +tds[0],
                    "country": $(tds[1]).text(),
                    "rating": +tds[2]
                };
                results.push(obj);
            });
        return results;
    } catch (error) {
        log(error);
    }
}

const data = get_data('https://gtmarket.ru/ratings/freedom-in-the-world');

log(data.length);
let json_str = JSON.stringify(data, null, 4);
log(json_str);
require('fs').writeFileSync('./countries_rating.json', json_str);
