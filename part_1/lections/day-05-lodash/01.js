const _ = require("lodash")
const clients = require("./json/clients.json").clients
const log = console.log

let clients_ = clients
    .map(x => { 
        // return { "age": x.age, "name": x.name, "gender": x.gender }
        // return _.zipObject(["age","name","gender"], [x.age,x.name,x.gender])
        return JSON.parse(JSON.stringify(x, ["age","name","gender"]))
    })

_
    .orderBy(clients_, ["age","name"], ["desc","asc"])
    .filter(x => x.gender === "male")
    .forEach(x => log(x))
