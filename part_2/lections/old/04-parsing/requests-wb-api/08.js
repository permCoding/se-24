const request = require('request')
const log = console.log

const viewData = (json) => {
    json = json
        .sort((a,b) => a.lastName > b.lastName? +1: -1)
        .slice(0, 3)
    log(JSON.stringify(json, ["lastName","rating"], 2))
}

const processData = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, data) => {
            if (error) reject(error) // return catch
            resolve(data) // return then
        })
    })
}

(async () => {
    let url = 'https://pcoding.ru/json/abiturs.json'
    log(333333)
    await processData(url)
        .then(data => JSON.parse(data))
        .then(json => viewData(json))
        .catch(error => log(error.message))
    log(444444)
})()
