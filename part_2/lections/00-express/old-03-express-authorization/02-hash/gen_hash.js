const crypto = require('crypto') // node:crypto
const md5 = require('md5')
const sha1 = require('sha1')

const log = console.log

const ex_01 = (string) => {
    return crypto
        .createHash('md5')
        .update(string)
        .digest('hex')
}

const ex_02 = () => {
    return md5(string)
}

const ex_03 = () => {
    return sha1(string)
}

let string = '0000' // password

log(ex_01(string))
log(ex_02(string))
log(ex_03(string))
