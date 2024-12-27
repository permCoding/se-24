const request = require('request') // npm i request
// https://www.npmjs.com/package/request

const solver = (url) => {
    request.get(url, (error, response, data) => {
        if (!error && response.statusCode == 200) {
            lines = data.split("\n")
            // тут решение
            console.log('вывод ответа')
        }
    })
}

url = "https://pcoding.ru/txt/labrab04-1.txt"
solver(url)

