const request = require('request')
const log = console.log

const processData = () => {
    log(111111)
    let url = 'https://pcoding.ru/json/abiturs.json'
    request.get({url: url, encoding: "utf8"}, (error, response, data) => {
        if (error) log(error)
        let json = JSON.parse(data)
        log(JSON.stringify(json, null, 2))    
    })
    log(222222)
}

processData()
