const log = console.log

const pause = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(++sec) }, 1000*sec)
    })
}

pause(0)
    .then(x => { log(x); return pause(x); })
    .then(x => { log(x); return pause(x); })
    .then(x => { log(x); return pause(x); })
    .then(x => { log(x); return pause(x); })
    .catch(err => log(`err = ${err}`))
    .finally(log('finally'))
