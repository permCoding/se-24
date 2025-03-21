const log = console.log

const viewData = (json, limit) => {
    log(JSON.stringify(json.slice(0, limit), ["lastName"], 2))
}

const processData = async (url) => {
    let options = {method: "GET", encoding: "utf8"}
    let response = await fetch(url, options)
    return await response.json()
}

const main = async () => {
    log(111111)
    let json = await processData('https://pcoding.ru/json/abiturs.json')
    viewData(json, 5)
    log(222222)
}

main()
