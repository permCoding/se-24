const printData = (filtred) => {
    console.log(
        JSON.stringify(filtred, null, 4), filtred.length
    )
}

const callback = (error, response, data) => {
    if (!error && response.statusCode == 200) {
        let filtred = JSON.parse(data).filter(x => x.completed);
        printData(filtred);
    }
}

const ex_01 = (url) => {
    const request = require('request') // npm i request
    request.get(url, callback)
}

const ex_02 = (url) => {
    const request = require('sync-request') // npm i sync-request
    let data = request("GET", url).getBody("utf8");
    let filtred = JSON.parse(data).filter(x => x.completed);
    printData(filtred);
}

const ex_03 = () => {
    let url = 'https://pcoding.ru/txt/labrab04-1.txt';

    let options = {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' }
    };

    fetch(url, options)
        .then(resp => resp.text())
        .then(data => console.log(data.split('\n').length));
}

console.clear()
let url = 'https://jsonplaceholder.typicode.com/todos/';
ex_01(url);
// ex_02(url);
// ex_03();
