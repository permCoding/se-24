const request = require('sync-request')
const log = console.log

let url = 'https://pcoding.ru/json/abiturs.json'
// let url = 'http://files-pcoding.1gb.ru/json?filename=abiturs.json'

let response = request('GET', url)
let data = response.getBody('utf8')

let json = JSON.parse(data)
log(JSON.stringify(json, null, 2))
