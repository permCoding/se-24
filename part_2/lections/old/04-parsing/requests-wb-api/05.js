const request = require('request')
const log = console.log

const viewData = (json) => {
    json = json.slice(0, 3)
    log(111111)
    log(JSON.stringify(json, null, 2))
    log(222222)
}

const processData = () => {
    let url = 'https://pcoding.ru/json/abiturs.json'
    request.get({url: url, encoding: "utf8"}, (error, response, data) => {
        if (error) log(error)
        let json = JSON.parse(data)
        viewData(json)
    })
}

processData()
