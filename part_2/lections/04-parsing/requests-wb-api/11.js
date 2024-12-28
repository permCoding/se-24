const log = console.log

log(111111)
let url = 'https://pcoding.ru/json/abiturs.json'
let options = {method: "GET", encoding: "utf8"}
let promise = fetch(url, options)
promise
    .then(resp => resp.json()) // json, text, blob
    .then(json => json.slice(0, 3))
    .then(json => log(JSON.stringify(json, null, 2)))
log(222222) // не будет ждать окончания промиса
