const request = require('request')
const log = console.log

const viewData = (json) => {
    json = json.slice(0, 3)
    log(111111)
    log(JSON.stringify(json, null, 2))
    log(222222)
}

const processData = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, data) => {
            if (error) reject(error) // return catch
            resolve(data) // return then
        })
    })
}

const start = async (url) => {
    log(333333)
    await processData(url)
        .then(data => JSON.parse(data))
        .then(json => viewData(json))
        .catch(error => log(error.message))
    log(444444)    
}

let url = 'https://pcoding.ru/json/abiturs.json'
start(url)
