const { clients } = require("./data/clients.json")
const log = console.log


// log(clients[0])

// let str = JSON.stringify(clients, null, 4)
// log(str)
// log(JSON.parse(str))

clients
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
