const log = console.log

const processData = (text) => { // flag /s чтобы перенос строки как любой символ
    let ptn = /class="sunrise_set[^>]*>(.*?)<br\/>(.*?)<\/div>/sg
    let iter = text.matchAll(ptn) // match - не возвращает скобочные группы; matchAll возвращает итератор
    // for (let elm of iter) { log(elm[1].trim(), elm[2].trim()) }
    let arr = Array.from(iter).slice(1,) // log(arr.length)
    arr.forEach(elm => log(elm[1].trim(), elm[2].trim()))
}

let url = 'https://pogoda7.ru/prognoz/gorod701-Russia-Permskiy_kray-Perm'
let ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
let headers = new Headers({"User-Agent": ua})
let options = {method: "GET", encoding: "utf8", headers: headers}
let promise = fetch(url, options)

promise
    .then(resp => resp.text()) // json, text, blob
    .then(text => processData(text))
    .catch(error => log(error))
    .finally(() => log('==> the end <=='))

/* Python
ptn = '<div class="sunrise_set.+?>(.+?)<br/>(.+?)</div>'
divs = re.findall(ptn, html, re.DOTALL)
p(len(divs))
for div in divs[1:]:
    p(div[0].strip(), div[1].strip())
*/