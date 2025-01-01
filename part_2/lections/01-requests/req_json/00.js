// https://sampleapis.com/

const https = require("https")

let url = 'https://api.sampleapis.com/beers/ale'

https.get(url, (response) => {
    var body = ""
    
    response.on("data", (chunk) => {
        body += chunk
    });

    response.on("end", () => {
        console.log(JSON.parse(body))
    })
})
