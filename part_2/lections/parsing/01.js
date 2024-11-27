const cheerio = require('cheerio');


const ex_01 = (html) => {  // для браузера
    let items = Array.from(document.querySelectorAll('a'));
    return items.map(({text, href}) => ({text, href}));
}

const ex_02 = (html) => {  // для Node.js + cheerio
    const $ = cheerio.load(html);

    let results = [];
    let items = $('a');  // Аналог document.querySelectorAll('a')
    items.each((_, elm) => {
        const href = $(elm).attr('href');
        const text = $(elm).text();
        results.push({text, href});
    });

    return results;
}

const ex_03 = (html) => {  // для Node.js + cheerio
    const $ = cheerio.load(html);

    return $('a')
        .map((_, elm) => {
            const href = $(elm).attr('href');
            const text = $(elm).text();
            return {text, href};
        })
        .toArray();
}

const ex_04 = (html) => {  // для Node.js + cheerio
    const $ = cheerio.load(html);
    return $('a')
        .map((_, elm) => (
            {
                "text": $(elm).text(), 
                "href": $(elm).attr('href')
            }
        ))
        .toArray();
}

let html = `
    <a href="index1.html">1001</a>
    <a href="index2.html">1002</a>
    <a href="index3.html">1003</a>
`

let results = ex_04(html);
console.log('results = ', results);
