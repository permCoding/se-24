const request = require('request')
const log = console.log

let url = 'https://pcoding.ru/json/abiturs.json'
request.get({url: url, encoding: "utf8"}, (error, response, data) => {
    if (error) log(error)
    let json = JSON.parse(data).slice(0,5)
    log(JSON.stringify(json, ["lastName"], 2))
})
