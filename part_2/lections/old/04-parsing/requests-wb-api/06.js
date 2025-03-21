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

let url = 'https://pcoding.ru/json/abiturs.json'
log(333333)
processData(url)
    .then(data => JSON.parse(data))
    .then(json => viewData(json))
    .catch(error => log(error.message))
log(444444) // не будет ждать окончания процессов в промисе
