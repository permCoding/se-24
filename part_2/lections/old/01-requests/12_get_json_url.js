const request = require('request') // npm i request
const log = console.log

let url = 'https://pcoding.ru/json/clients.json'

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        JSON.parse(data)
            .clients
            .map(ob => {
                return { 
                    "name": ob.name, 
                    "address": ob.address, 
                    "age": ob.age, 
                    "gender": ob.gender
                }
            })
            .sort((a, b) => a.age > b.age? +1: -1)
            .forEach(ob => log(JSON.stringify(ob, null, 4)))    
    }
})
