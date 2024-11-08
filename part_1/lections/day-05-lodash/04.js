const _ = require("lodash")
const arr = require("./json/data.json")
const log = console.log

const ex_01 = () => {
    const obj = arr[0]  // copy object

    log(arr[0]);  log(obj)
    obj.age = 20
    log(arr[0]); log(obj)
}

const ex_02 = () => {
    const obj = _.clone(arr[0])

    log(arr[0]);  log(obj)
    obj.age = 20
    log(arr[0]); log(obj)
}

const ex_03 = () => {
    const obj = _.clone(arr[0])

    log(arr[0]);  log(obj)
    obj.name.first = 'Юля'
    log(arr[0]); log(obj)
}

const ex_04 = () => {
    const obj = _.cloneDeep(arr[0])

    log(arr[0]);  log(obj)
    obj.name.first = 'Юля'
    log(arr[0]); log(obj)
}

ex_01()
