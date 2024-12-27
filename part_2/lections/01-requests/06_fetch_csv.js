// fetch - https://developer.mozilla.org/ru/docs/Web/API/fetch
// https://ru.stackoverflow.com/questions/903989/%D0%9A%D0%B0%D0%BA-%D0%BE%D1%82%D0%BB%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D1%82%D1%8C-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8-fetch
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

const processData = (data) => {
    let options = {columns: false, trim: true} // columns: true => json
    parse(data, options, (err, rows) => { 
        let array_objects = rows
            .slice(1,)
            .map(row => {
                return {
                    "rating": +row[2], 
                    "lastName": row[1]
                }
            })
        log(JSON.stringify(array_objects, null, 2))
    })
}

const ex_01 = (url) => {
    fetch(url, { method: "GET" }) // default GET
        .then(res => res.text())
        .then(data => {
            // log(data)
            processData(data)
        })
        .catch(error => log(error.message))
}

const ex_02 = async () => {
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let text = await response.text()
    processData(text)
}

let url = 'https://pcoding.ru/csv/abiturs.csv'
ex_02(url)
