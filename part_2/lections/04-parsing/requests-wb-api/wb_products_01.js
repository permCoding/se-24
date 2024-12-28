const request = require('request') // npm i request
const fs = require('fs');
const log = console.log

const get_json_from_url = (options) => {    
    return new Promise((resolve, reject) => {
        request.get(options, (error, response, data) => {
            if (error) reject({error})
            let json = {}
            try {
                json = JSON.parse(data)    
            } catch (error) {
                
            }
            resolve(json)
        })
    })
}

// sort=pricedown
const get_product = async (id) => {
    let headers = {
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'Referer': `https://www.wildberries.ru/catalog/${id}/detail.aspx?targetUrl=SP`,
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"'
    };
    let vol = String(id), part = String(id);
    vol = vol.substring(0, 4);
    part = part.substring(0, 6);
    let options = {
        url: `https://basket-12.wb.ru/vol${vol}/part${part}/${id}/info/ru/card.json`,
        headers: headers
    };
    let json = await get_json_from_url(options);
    return json["options"]
} 


const process = async () => {
    let count_pages = 3
    let arr = []
    for (let num = 1; num <= count_pages; num++) {
        const headers = {
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
        let options = {
            // url: `https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&fbrand=6667&page=${num}&query=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA&resultset=catalog&sort=pricedown&spp=26&suppressSpellcheck=false&uclusters=1`,
            url: `https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA&resultset=catalog&sort=popular&spp=26&suppressSpellcheck=false&uclusters=1`,
            headers: headers
        };
    
        let json = await get_json_from_url(options)
        let prods = json.data.products;
        let products = [];
        for (let x of prods) {
            let prodOptions = await get_product(x.id); // 177689814
            products.push({
                id: x.id,
                "name": x["name"], 
                "brand": x["brand"],
                "brandId": x.brandId, 
                siteBrandId: x.siteBrandId, 
                priceU: x.priceU, 
                salePriceU: x.salePriceU,
                prodOptions
            })
        }
        arr = [...arr, ...products];
    }
    log(`number of products = ${arr.length}`)
    fs.writeFileSync("./json/wb_laptops.json", JSON.stringify(arr, null, 4), {encoding: "utf8"});
}

process()

// https://basket-10.wb.ru/vol1538/part153899/153899955/info/ru/card.json

// curl 'https://basket-10.wb.ru/vol1538/part153899/153899955/info/ru/card.json' \
//   -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
//   -H 'Referer: https://www.wildberries.ru/catalog/153899955/detail.aspx?targetUrl=SP' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   --compressed