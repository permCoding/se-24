const log = console.log

// let code = 'CamelCase camelCase JavaScript'
let code = 'CamelCase;camelCase,JavaScript.PHP Ruby forEach matchAll lowerCamelCase theHTTPRequest'

const getWords = (code) => {
    // return code.split(' ')
    // return code.split(/[\p{P}\s]/u)
    let ms = code.matchAll(/\w+/g)
    return Array.from(ms).map(m => m[0])
}

let array = getWords(code)
log(array)

/*
    ^              // start word
    [a-z]+         // lowercase letter
    (              // group of:
        [A-Z]      //     uppercase letter
        [a-z]*     //     lowercase letter zero or more times
    )+             // group at least one time
    $              // end word
*/

let ptn = /^[a-z]+([A-Z][a-z]*)+$/
array.forEach(word => log(ptn.test(word), word))
