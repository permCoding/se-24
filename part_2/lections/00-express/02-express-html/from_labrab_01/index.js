/* требуется объект преобразовать в строку параметров запроса http query
let queryStr = "page=1&ab_testing=false&appType=1&curr=rub&dest=12358373&query=коврик для мышки&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";
*/

let params = require("./params.json"); // это объект с параметрами

// ver_1 - если требуется преобразовать строку запроса с кириллицей в Unicode
let query1 = new URLSearchParams(params).toString();

let query2 = JSON.stringify(params) // ver2 - str
    .replaceAll('"', '')
    .replaceAll(' ', '')
    .replaceAll('{', '')
    .replaceAll('}', '')
    .replaceAll(':', '=')
    .replaceAll(',', '&');

let query3 = Object
    .keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

let query4 = Object
    .entries(params)
    .map(pair => `${pair[0]}=${pair[1]}`)
    .join('&');

let query5 = (() => {
    let res = '';
    for (let key of Object.keys(params)) {
        res += key + "=" + params[key].toString() + "&"
    }
    return res.substring(0, res.length-1);
})();

console.log(query1);
console.log(query2);
console.log(new URLSearchParams(query2).toString()); // если нужные Unicode
console.log(query3);
console.log(query4);
console.log(query5);
