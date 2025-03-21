import { readFileSync, readFile } from 'node:fs';
const log = console.log

const ex_01 = () => {
    log(111111)
    let data = readFileSync("./data/abiturs.csv", "utf-8")
    log(data)
    log(999999)
}

const ex_02 = () => {
    log(111111)
    readFile("./data/abiturs.csv", "utf-8", (error, data) => {
        log(data)
    })
    log(999999)
}

const ex_03 = () => {
    readFile("./data/abiturs.csv", "utf-8" , (error, data) => {
        log(111111)
        log(data)
        log(999999)
    })
}

const processData = (data) => {
    log(111111)
    log(data)
    log(999999)
}

const ex_04 = () => {
    let options = { encoding:"utf-8", flag: "r" }
    readFile("./data/abiturs.csv", options, (error, data) => {
        processData(data)
    })
}

ex_04()
