const log = console.log

const prom01 = (sec) => {
    return new Promise((resolve, reject) => {
        if (sec < 3) { reject(sec) }
        setTimeout(() => { resolve(sec) }, 1000*sec)
    })
}

function prom02(sec) {
    return new Promise((resolve, reject) => {
        if (sec < 3) { reject(sec) }
        setTimeout(() => { resolve(sec) }, 1000*sec)
    })
}

// prom01(2)
//     .then(x => log(`${x}`))
//     .catch(err => log(`err = ${err}`))
//     .finally(log('finally'))

// prom02(2)
//     .then(x => log(`${x}`))
//     .catch(err => log(`err = ${err}`))
//     .finally(log('finally'))

prom02(3)
    .then(x => new Promise((resolve, reject) => {
        resolve()
        log(`${x}`)
    }))
    .catch(err => log(`err = ${err}`))
    .finally(log('finally'))

// let url = 'https://jsonplaceholder.typicode.com/photos'
// fetch(url)
//     .then(resp => resp.json())
//     .then(arr => arr.slice(0, 5))
//     .then(arr => log(JSON.stringify(arr, null, 4)))
