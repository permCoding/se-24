const https = require('https') // или require('http')
const log = console.log

const url = 'https://pcoding.ru/json/abiturs.json'

log('==> the begin <==')

https // работает асинхронно
    .get(url, (response) => {
        let data = ''
        response
          .on('data', chunk => data += chunk)
          .on('end', () => {
              let json = JSON.parse(data)
              log(JSON.stringify(json.slice(0,2), null, 2))
        })
    })
    .on('error', error => log(error))

log('==>  the end  <==')
