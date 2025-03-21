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

const ex_05 = (html) => {  // для Node.js + cheerio
    const $ = cheerio.load(html);
    return $('a')
        .toArray()
        .map(elm => (
            {
                "text": +$(elm).text(), 
                "href": $(elm).attr('href')
            }
        ));
}

let html = `
    <a href="index1.html">1001</a>
    <a href="index2.html">1002</a>
    <a href="index3.html">1003</a>
`

let _json = ex_05(html);
console.log('_json = ', JSON.stringify(_json, null, 4));
