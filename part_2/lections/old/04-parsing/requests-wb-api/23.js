const axios = require('axios') // npm i axios
const log = console.log

const processData = async (url) => { // работает синхронно
    log('==> the begin <==')

    try {
        let response = await axios.get(url)
        let json = response.data
        json = json.sort((a,b) => a.lastName>b.lastName? +1: -1).slice(0, 2)
        log(JSON.stringify(json, null, 2))    
    } catch (error) {
        log(error)
    } finally {
        log('==> finally <==')
    }
    
    log('==>  the end  <==')
}

processData('https://pcoding.ru/json/abiturs.json')
