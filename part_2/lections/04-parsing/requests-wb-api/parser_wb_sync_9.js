var request = require('request');
let fs = require('fs');

var headers = {
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'Referer': 'https://www.wildberries.ru/catalog/177689814/detail.aspx?targetUrl=SP',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Linux"'
};

var options = {
    url: 'https://basket-12.wb.ru/vol1776/part177689/177689814/info/ru/card.json',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        let json = JSON.parse(body);
        json = { title: json["imt_name"], description: json["description"], options: json["options"]}
        // console.log(JSON.stringify(json, null, 2));
        fs.writeFileSync('./json/product.json', JSON.stringify(json, null, 4), {encoding: "utf8"});
    }
}

request(options, callback);
