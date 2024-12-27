const request = require('request')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.csv'

request.get(url, (error, response, data) => {
    parse(data, {columns: true, trim: true}, (err, rows) => {
        // массив массивов, если columns: false
        // массив объектов, если columns: true
        // log(rows) 
        // rows.forEach(row => log(row.join()))  // для массива массивов

        // rows  // для массива массивов
        //     .sort((a, b) => +a[2] > +b[2]? -1: +1)
        //     .forEach(element => log(element[2], element[1]))
        
        rows  // для массива объектов
            .sort((a, b) => +a["rating"] > +b["rating"]? -1: +1)
            .slice(0, 5)
            .forEach(obj => log(obj["rating"], obj["lastName"]))
    })
})
