// fetch - https://developer.mozilla.org/ru/docs/Web/API/fetch
// https://ru.stackoverflow.com/questions/903989/%D0%9A%D0%B0%D0%BA-%D0%BE%D1%82%D0%BB%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D1%82%D1%8C-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8-fetch

const log = console.log

const processData = (json) => {
    json
        .filter(x => x.city == "Кунгур")
        .sort((a, b) => a.rating > b.rating? -1: +1)
        .slice(0, 3)
        .map(x => { 
            x.gender = x.gender == 1? 'male': 'female'
            delete x.city
            delete x.id
            return x
        })
        .forEach(elm => log(elm))
}

const ex_01 = (url) => {
    fetch(url, { method: "GET" }) // default GET
        .then(res => res.json())
        .then(json => {
            // log(json)
            processData(json)
        })
        .catch(error => log(error.message))
}

const ex_02 = async () => {
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let json = await response.json()
    processData(json)
}

let url = 'https://pcoding.ru/json/abiturs.json'
ex_01(url)

/*
задачи:  
- вывести трёх первых по убыванию рейтинга из Кургура
- если наверху есть несколько с одинаковым рейтингом
  то вывести всех, кто не хуже рейтинга третего места
- как отсортировать по двум параметрам ?
-- сначала по городу, и в городах - по имени
*/