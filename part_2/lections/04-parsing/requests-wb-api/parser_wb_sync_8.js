const request = require('request') // npm i request
const fs = require('fs');
const log = console.log

let headers = {
    'Accept': '*/*',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Connection': 'keep-alive',
    'Origin': 'https://www.wildberries.ru',
    'Referer': 'https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=pricedown&search=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA&fbrand=6667',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'x-userid': '107167966'
};

const get_json_from_url = (num) => {
    var options = {
        url: `https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&fbrand=6667&page=${num}&query=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA&resultset=catalog&sort=pricedown&spp=26&suppressSpellcheck=false&uclusters=1`,
        // url: `https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA&resultset=catalog&sort=popular&spp=26&suppressSpellcheck=false&uclusters=1`,
        headers: headers
    };
    
    return new Promise((resolve, reject) => {
        request.get(options, (error, response, data) => {
            if (error) reject(error)
            resolve(JSON.parse(data))
        })
    })
}

const process = async () => {
    let count_pages = 3
    let arr = []
    for (let num = 1; num <= count_pages; num++) {
        let json = await get_json_from_url(num)
        let products = json.data.products;
        arr = [...arr, ...products];
    }
    log(`number of products = ${arr.length}`)
    log(JSON.stringify(arr[0], null, 4))
    fs.writeFileSync("./json/wb_laptop.json", JSON.stringify(arr, null, 4), {encoding: "utf8"});
}

process()
