const { time, timeEnd } = require("console");
const fs = require("fs");
const log = console.log


const processCSV = (data, sep=",", shift=0, column=0) => {
    let lines = data
        // .split("\n")
        // .split(/\n/g)
        // .split(/[\n|\r\n]/g)
        // .split(/\r{0,1}\n/g)
        .split(/\r?\n/g)

        // .replace("\r", "")
        // .split("\n")

        .slice(shift, )
    lines
        .map(line => line.split(sep)[column])
        .sort((a,b) => a>b? +1: -1)
        .forEach(element => log(element))
}

const ex_01 = () => {
    let options = { encoding:"utf-8", flag: "r" }
    fs.readFile("./data/abiturs_rn.csv", options, (error, data) => {
        if (error) throw error;
        time("test");
        processCSV(data, ",", 1, 1)
        timeEnd("test")
    })
}

ex_01()
