const _ = require("lodash")
const arr = require("./json/data.json")
const log = console.log

const ex_01 = () => {
    const func = (elm) => {
        if (elm.name.first != '') {
            elm.name.first = elm.name.first[0]
        }
        return elm
    }

    const obj = _.cloneDeepWith(arr[0], func)  // copy object

    log(obj.name.last, obj.name.first)
}

const ex_02 = () => {
    const func = (elm) => {
        if (elm.age != '') {
            elm.name.first = elm.name.first[0]
        }
        return elm
    }

    arr
        .map(obj => _.cloneDeepWith(obj, func))
        .forEach(obj => log(obj.name.last, obj.name.first))
}

ex_02()
