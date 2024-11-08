const _ = require("lodash")
const arr = require("./json/data.json")
const log = console.log

const ex_01 = () => {
    let upd = _.remove(arr, (elm) => elm.age <= 22)
    log(upd)
    log(arr)
}

const ex_02 = () => {
    let upd = _(arr)
        .remove((elm) => elm.age <= 22)
        .orderBy(['name.last'],['desc'])
        .value()
    log(upd)
    log(arr)
}

const ex_03 = () => {
    const obj = { name: { first: 'Миша', last: 'Васин' }, age: 21, gender: 'male' }
    arr.push(obj)
    _(arr)
        .orderBy(['gender','age','name.first'],['asc','desc','asc'])
        .forEach(obj => log(obj))
}

ex_03()
