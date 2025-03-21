const axios = require('axios') // npm i axios
const log = console.log

const processData = async (url) => {
    log('==> the begin <==')

    try {
        let response = await axios.get(url)
        let json = response.data
        let task = json[0]
        // log(JSON.stringify(task, null, 4))
        let text = task['text']
            .split('</a>')[1]
            .replace(/<\/?p>/g, '')
            .replace(/<\/?strong>/g,'')
            .replace(/&lt;/g, '<=')
        log(text)
    } catch (error) {
        log(error)
    } finally {
        log('==> finally <==')
    }
    
    log('==> the end <==')
}

let url = "https://kompege.ru/api/v1/task/number/18"
processData(url)
