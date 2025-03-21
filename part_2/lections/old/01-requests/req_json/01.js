// https://sampleapis.com/

const https = require("https")

function getter(url) {
    https.get(url, (response) => {
        var body = ""
        
        response.on("data", (chunk) => {
            body += chunk
        });

        response.on("end", () => {
            if(response.statusCode === 200) {
                try {
                    let array = JSON.parse(body)
                    console.log(array.length)
                    console.log(array[0])
                } catch (error){
                    console.error(error.message)
                }
            }
        })
    })
}

getter('https://api.sampleapis.com/beers/ale')
