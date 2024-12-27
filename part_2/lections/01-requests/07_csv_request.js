const request = require('request')
const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.csv'

const print_list = (arr) => {
    arr
        .sort((a, b) => +a.split(',')[2] > +b.split(',')[2]? -1: +1)
        .forEach(element => log(element))
}

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        print_list(data.split(/\r?\n/).slice(1,))
    } else {
        log(error)
    }
})
