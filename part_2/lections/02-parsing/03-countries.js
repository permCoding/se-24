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

        const table = $('#study-dataset').find('.table');

        if (table.length) { // если элемент найден
            log('Найденный элемент:', table.html());
        } else {
            log('Элемент не найден');
        }
    } catch (error) {
        log(error);
    }
}

fetchAndParse('https://gtmarket.ru/ratings/freedom-in-the-world');

/*
    $('h1').each((index, element) => {
        console.log($(element).text());
    });
*/