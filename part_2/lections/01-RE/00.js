/*
    ptn.test() - есть или нет совпадения
    str.matchAll(pth) - итератор совпадений
    ptn.exec(str) - итератор совпадений
*/

const log = console.log

const ex_01 = () => {
    let str = 'aaaf maat aaad maaw'

    let ptn1 = /a{2}[cd]/
    let ptn2 = new RegExp('a{2}[cd]')

    log(ptn1.test(str))
    log(ptn2.test(str))

    // for (let smb of 'cdefgh') {
    //     let ptn = new RegExp(`a{2}${smb}`)
    //     log(ptn.test(str))
    // }
}

const ex_02 = () => {
    let str = 'aaaf maat aaad maaw maac'

    let ptn = /a{2}[cd]/g // искать глобально
    let matches = str.matchAll(ptn) // iterator
    let arr = Array.from(matches)

    log(arr.length) // сколько совпадений
    arr.forEach(elm => log(elm))  // печать совпадений
    arr.forEach(elm => log(elm[0], elm.index))  // печать совпадений
}

const ex_03 = () => {
    let str = 'daad aad aaaf maat aaad maaw maac'
    let ptn = /[a-z]{1}a{2}[cd]{1}?/g // искать глобально

    const result = ptn.exec(str)

    log(result)
    log(result? [result[0], result.index]: "не найдено")
}

const ex_04 = () => {
    let str = 'daad aad aaaf maat aaad maaw maac'
    let ptn = /[a-z]{1}a{2}[cd]{1}?/g // искать глобально
    
    let match
    while ((match = ptn.exec(str)) !== null) {
        log(`Найдено "${match[0]}" на индексе ${match.index}`);
    }
    // arr.forEach(elm => log(elm[0], elm.index))  // печать совпадений
}

const ex_05 = () => {
    let str = 'aad aaaf aadaac caadaad maat aaad maaw maac'

    let ptn = /[a-z]*a{2}[cd]{1}?/g // искать глобально
    let matches = str.matchAll(ptn) // iterator
    let arr = Array.from(matches)

    log(arr.length) // сколько совпадений
    arr.forEach(elm => log(elm))  // печать совпадений
    arr.forEach(elm => log(elm[0], elm.index))  // печать совпадений
}

// ex_01()
// ex_02()
ex_03()
// ex_04()
// ex_05()