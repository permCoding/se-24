const log = console.log

const get_url = (num) => {
    return `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
}

let count_pages = 5
let num = 1
while (num++<= count_pages) {
    let url = get_url(num)
    fetch(url, {"method": "GET"})
        .then(res => res.json())
        .then(json => json.data.products.forEach(elm => log(elm.brand)))
        .catch(error => log(error.message))
}
