const request = require('request') // npm i request
const log = console.log

let url = 'https://pcoding.ru/json/abiturs.json'

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        let json = data
        // log(json)
        let arr = JSON.parse(json)
        arr
            .sort((a, b) => +a.rating - b.rating)
            .slice(0, 3)
            .forEach(element => log(element))
    }
})

// https://api.openweathermap.org/data/2.5/onecall?lat=59.57&lon=30.19&exclude=hourly,minutely,alerts&units=metric&appid=9c9278b6ff53fc3ff704cedb3d0ad747