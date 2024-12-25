const log = console.log

const getLowerCamelCase = (code) => {
    // let ptn = /\W([a-z]+([A-Z][a-z]*)+)\W/g
    // let ptn = /[\W]*([A-Za-z-]+)(?=[\W]*)/g // all words
    let ptn = /\b([a-z]+([A-Z][a-z-]*)+)\b/g // all lowerCamelCase
    let ms = code.matchAll(ptn)
    return Array.from(ms).map(m => m[1])
}


// let code = 'CamelCase;camelCase,JavaScript.PHP Ruby forEach matchAll lowerCamelCase theHTTPRequest'

let code = ` CamelCase; camelCase, 
  wordOfWord JavaScript.PHP Ruby forEach matchAll 
lowerCamelCase theHTTPRequest`

let array = getLowerCamelCase(code)

log(array)
