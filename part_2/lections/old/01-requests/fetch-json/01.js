let host = "https://search.wb.ru/exactmatch/ru/male/v4/search?";

let arr_params = require('./params.json');
let index = 1;
let params = arr_params[index];
let query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

let link = `${host}${query}`;

let headers = require("./headers.json");

let fields = ['brand', 'colors', 'name', 'priceU', 'salePriceU', 'promoTextCard', 'volume', 'rating'];

(async () => {
    let res = await fetch(link, {"headers": headers, "body": null, "method": "GET"});
    let json = await res.json();
    let products = json.data.products;
    let strJSON = JSON.stringify(products.slice(0, 25), fields, 4);
    require('fs').writeFileSync('./products_tables.json', strJSON, 'utf8');
})();

/*
по популярности, по рейтингу, по цене
по возрастанию, по убыванию
*/
