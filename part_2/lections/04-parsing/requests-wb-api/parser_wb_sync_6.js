const request = require('request') // npm i request
const log = console.log

const get_json_from_url = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, data) => {
            if (error) reject(error)
            resolve(JSON.parse(data))
        })
    })
}

const process = async () => {
    let num = 1
    let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
    let json = await get_json_from_url(url)
    let arr = json.data.products.map(elm => elm.brand)
    log(arr)
}

process()
