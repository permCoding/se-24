const request = require('sync-request'); // npm i sync-request
// https://www.npmjs.com/package/sync-request

const get_lines_from_url = (url) => {
    let data = request("GET", url).getBody("utf8");
    return data.split("\n");
}

const url = "https://pcoding.ru/txt/labrab04-1.txt";
const lines = get_lines_from_url(url);
require('fs').writeFileSync('./csv/test.csv', lines[0], 'utf8');

console.log('вывод таблицы с данными')
