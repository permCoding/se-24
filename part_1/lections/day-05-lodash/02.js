const _ = require("lodash")

const get = x => _.zipObject(["age","name","gender"], [x.age,x.name,x.gender])

const clients_ = require("./json/clients.json").clients.map(x => get(x))

_(clients_)
    .orderBy(["age","name"], ["desc","asc"])
    .filter(x => x.gender === "male")
    .forEach(x => console.log(x))
