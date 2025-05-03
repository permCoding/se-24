/*
    ptn.test() - есть или нет совпадения
    str.matchAll(pth) - итератор совпадений
    ptn.exec(str) - итератор совпадений
*/

const log = console.log

const ex_00 = () => {
    log(/456/.test('123 456 789')); // есть ли такой шаблон в строке?

    const wordPattern = /\bбыть\b/iu; // строка содержит слово
    const str = 'Быть или не быть, вот в чём вопрос...';
    log(wordPattern.test(str));
}

const ex_00_b = () => { // строка содержит слово
    const str = 'Быть или не быть, вот в чём вопрос...';

    // const wordPattern = /\bбыть\b/igu; // тут проблемы с кириллицей
    const wordPattern = /(^|\s)бЫтЬ($|\s|[.,;?!])/iu; // можно так исправить
    // u - unicode, i - case insensitive
    log(wordPattern.test(str));
}

const ex_01 = () => {
    let str = 'aaaf maat aaad maaw'

    /* два способа формирования шаблонов поиска
       1) const regex = /pattern/flags; - литерал регулярного выражения
       2) const regex = new RegExp('pattern', 'flags'); - класс RegExp
    */
    let ptn1 = /a{2}[cd]/
    let ptn2 = new RegExp('a{2}[cd]')
    
    let amount = 4 // шаблон можно формировать динамически
    let ptn3 = new RegExp(`a{${amount}}`)

    log(ptn1.test(str))
    log(ptn2.test(str))
    log(ptn3.test(str))

    for (let smb of 'abcdef') { // шаблон можно формировать динамически
        let ptn = /a{2}${smb}/ // так проще редактировать шаблон
        if (ptn.test(str)) log(smb)
    }
}

const ex_02 = () => {
    let str = 'aaaf maat aaad maaw maac'

    let ptn = /a{2}[cd]/g // искать глобально
    let matches = str.matchAll(ptn) // iterator
    let arr = Array.from(matches) // итератор в массив

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

// ex_00()
ex_00_b()
// ex_01()
// ex_02()
// ex_03()
// ex_04()
// ex_05()