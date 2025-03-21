// npm install cheerio sync-request
const request = require('sync-request');
const cheerio = require('cheerio');

const log = console.log;

const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';

const options = { headers: { 'User-Agent': ua } };

const get_html = (url) => {
    let res = request('GET', url, options);
    return res.getBody('utf8'); // html
}

const fetchAndParse = (url) => {
    try {
        const html = get_html(url);
        const $ = cheerio.load(html);

        const element = $('#study-dataset'); // by id

        if (element.length) { // если элемент найден
            log('Найденный элемент:', element.html());
        } else {
            log('Элемент с данным id не найден');
        }
    } catch (error) {
        log(error);
    }
}

fetchAndParse('https://gtmarket.ru/ratings/freedom-in-the-world');
