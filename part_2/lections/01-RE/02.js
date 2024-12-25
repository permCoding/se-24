const cheerio = require('cheerio') // https://cheerio.js.org/docs/intro
const log = console.log

let str1 = String.raw`<a href="https://link1.com">
    title1
</a>      <a href="https://link2.com">title2</a>`

let str2 = '<a href="https://link3.com">   title3 \n      </a>'

const $ = cheerio.load(str1 + str2)

// Array
//     .from($('a'))
//     .forEach(e => log(cheerio.load(e).text().trim()))

Array
    .from($('a'))
    .forEach(e => log($(e).text().trim()))

for (let elm of $('a')) {
    log($(elm).text().trim(), $(elm).prop('href'))
}
