const log = console.log

const viewData = (json) => {
    log(JSON.stringify(json, ["lastName"], 2))
}

const processData = async () => {
    let url = 'https://pcoding.ru/json/abiturs.json'
    let options = {method: "GET", encoding: "utf8"}
    let response = await fetch(url, options)
    let json = await response.json()
    let len = json.length
    json = json.slice(0, Math.floor(len/2))
    viewData(json)
}

log(111111)
processData()
log(222222) // не будет ждать окончания
