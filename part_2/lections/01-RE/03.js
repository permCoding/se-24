/*
проверить строку
все ли символы написаны маленькими буквами
*/
const log = console.log

const check1 = (str) => {
    return str === str.toLowerCase()
}

const check2 = (str) => {
    return !(/\p{Lu}/u.test(str))
}

const check3 = (str) => {
    let ptn = /\p{Lu}/u
    // log(str.match(ptn))
    return str.match(ptn) === null
}

const strings = [
    'JavaScript',
    'js',
    'console',
]

log(strings.map(x => check1(x)))
strings.forEach(x => log(check2(x)))
strings.forEach(x => log(check3(x)))
