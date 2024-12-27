const _ = require("lodash")
const log = console.log

const processData_native = (json) => {
    let fieldA = "city", fieldB = "lastName"
    let arr = json
        .sort((a, b) => a[fieldB] > b[fieldB]? +1: -1)
        .sort((a, b) => a[fieldA] > b[fieldA]? +1: a[fieldA] < b[fieldA]? -1: 0)
    log(JSON.stringify(arr, ["city", "lastName"], 2))
}

const processData_lodash = (json) => {
    let arr = _.orderBy(json, ["city","lastName"], ["asc","asc"])
    log(JSON.stringify(arr, ["city","lastName"], 2))
}


(async () => {
    let url = 'https://pcoding.ru/json/abiturs.json'
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let json = await response.json()
    // processData_native(json)
    processData_lodash(json)
})()

/*
- как отсортировать по двум параметрам ?
- сначала по городу, и в городах - по имени
*/