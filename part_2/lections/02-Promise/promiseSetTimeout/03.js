const fs = require('fs')
const log = console.log

function checkData() {
    return new Promise((resolve, reject) => {
        fs.readFile(__filename, {encoding: 'utf-8'}, (err, data) => {
            let lines = data.split(/\r?\n/)
            if (Math.random() > 0.5) {
                resolve(lines[0])
            } else {
                reject(new Error(lines.at(-1)))
            }
        })
    });
}

log('1 '.repeat(9))

checkData()
    .then((data) => { 
        log('3 '.repeat(9))
        log(data) 
    })
    .catch((err) => log(err.message))
    .finally(() => log('4 '.repeat(9)))

log('2 '.repeat(9))