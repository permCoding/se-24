const log = console.log

const viewData = (json) => {
    log(111111)
    log(JSON.stringify(json, ["lastName"], 2))
    log(222222)
}

let url = 'https://pcoding.ru/json/abiturs.json'
let options = {method: "GET", encoding: "utf8"}
let promise = fetch(url, options)
promise
    .then(resp => resp.json()) // json, text, blob
    .then(json => {
        let len = json.length
        return json.slice(0, Math.floor(len/2))
    })
    .then(json => viewData(json))
    .catch(error => log(error))
    .finally(() => log('==> the end <=='))
