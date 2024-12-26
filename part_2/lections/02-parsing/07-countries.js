const axios = require('axios'); // npm install axios cheerio
const cheerio = require('cheerio');
const log = console.log;
const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
};

async function fetchAndParse(url) {
    try {
        const { html } = await axios.get(url, options);
        log(html);
        const $ = cheerio.load(html);

        const element = $('#study-dataset');

        if (element.length) { // если элемент найден
            log('Найденный элемент:', element.html());
        } else {
            log('Элемент с данным id не найден');
        }
    } catch (error) {
        log(error);
    }
}

fetchAndParse('https://pcoding.ru/');

/*
    https://pcoding.ru/
    https://gtmarket.ru/ratings/freedom-in-the-world
        $('h1').each((index, element) => {
            console.log($(element).text());
        });
*/