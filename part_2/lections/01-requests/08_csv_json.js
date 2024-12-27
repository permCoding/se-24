const request = require('request')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.csv'

request.get(url, (error, response, data) => {
    parse(data, {columns: true, trim: true}, (err, rows) => { // columns: true => json
        
        // rows.forEach(element => log(element))

        rows
            .sort((a, b) => +a["rating"] > +b["rating"]? -1: +1)
            // .forEach(element => log(element["rating"], element["lastName"]))
            .forEach(element => log(JSON.stringify(element, ["rating", "lastName"], 4)))
    })
})
