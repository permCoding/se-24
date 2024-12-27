const cheerio = require('cheerio');
const log = console.log;

const toArray = (chArray) => chArray.toArray().map(e => $(e).text());

const ex_01 = () => {
    const nextAll = $('li:first').nextAll();
    const prevAll = $('li:last').prevAll();
    const siblings = $('li:eq(2)').siblings();
    
    log(toArray(nextAll));
    log(toArray(prevAll));
    log(toArray(siblings));    
}

const ex_02 = () => {
    const liArr = $('li');
    log(liArr.length);

    for (let i = 0; i < liArr.length; i++) {
        let item_by_index = $(`li:eq(${i})`);
        log(toArray(item_by_index));
    }

    liArr.each((i,e) => log(i, $(e).text()));
    liArr.each((i,e) => log(i, $(e).html()));
}

const ex_03 = () => {
    log('by id:', $('#2').text());
    log('by class:', toArray($('.class-A')));
}

const html =   `
<ul>
    <li><div class=class-A>1-JS</div></li>
    <li><div id=2>2-Py</div></li>
    <li><b>3-Cs</b></li>
    <li>4-Go</li>
    <li><div class=class-A>5-Ru</div></li>
</ul>`;

const $ = cheerio.load(html);

// ex_01();
// ex_02();
ex_03();