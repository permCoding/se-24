const request = require('request');
const axios = require('axios'); // npm i axios
const s_request = require('sync-request');
const log = console.log;


const ex_01 = (url) => {
    request.get(url, (error, response, data) => {
        if (error) { log(error); return }
        if (response.statusCode === 200) { log(data); return }
        console.log(`Код ответа: ${response.statusCode}`);
    });
}


const ex_02 = async (url) => {
    let response = await fetch(url);
    if (!response.ok) { log(response.status); return }
    let text = await response.text();
    log(text);
}


const ex_03 = async (url) => {
    let response = await axios.get(url);
    log(response.data.split('\r\n'));
}


const ex_04 = (url) => {
    let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
    let options = { headers: {'user-agent': ua} };
    let res = s_request('GET', url, options);
    let data = res.getBody('utf8');
    log(data);
}


let url = 'https://pcoding.ru/csv/abiturs.csv'

// ex_01(url);
// ex_02(url);
ex_03(url);
// ex_04(url);
