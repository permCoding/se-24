const arr = require('./json/data.json') // npm i lodash
const _ = require('lodash')

let srt_arr = _.orderBy(arr, ['gender','age'], ['desc','asc'])

console.log(JSON.stringify(srt_arr, null, 2))
