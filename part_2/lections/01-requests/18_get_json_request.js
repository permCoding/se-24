const request = require('request')
const fs = require('fs')
const log = console.log
const url = 'https://pcoding.ru/json/abiturs.json'

const processData = (arr) => {
    let str = JSON.stringify(
        arr
            .sort((a, b) => +a.rating > b.rating? -1: +1)
            .slice(0, 5),
        null,
        2
    )
    fs.writeFileSync("./data/array_slice.json", str, "utf-8")
}

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        processData(JSON.parse(data))
    } else {
        log(error)
    }
})
