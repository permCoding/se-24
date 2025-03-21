const fs = require('fs')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let filename = "./data/abiturs.csv"

fs.readFile(filename, (err, data) => {
    let options = {columns: false, trim: true} // columns: true => json
    parse(data, options, (err, rows) => { 
        
        // log(data) // bytes

        // rows.forEach(row => log(row))
        
        // rows.forEach(row => log(row.join()))

        // rows
        //     .slice(1,)
        //     .map(row => [+row[2], row[1]])
        //     .sort((a,b) => b[0]-a[0])
        //     .slice(0,5)
        //     .forEach(elm => log(elm))

        // rows
        //     .slice(1,)
        //     .map(row => [
        //         ["rating", +row[2]], 
        //         ["lastName", row[1]]
        //     ])
        //     .map(row => Object.fromEntries(row))
        //     .forEach(obj => log(JSON.stringify(obj, null, 2)))

        let array_objects = rows
            .slice(1,)
            .map(row => [
                ["rating", +row[2]], 
                ["lastName", row[1]]
            ])
            .map(row => Object.fromEntries(row))
        
        let str = JSON.stringify(array_objects, null, 2)
        log(str)
        // fs.writeFile("./data/array_objects.json", str, "utf8", () => {})
        fs.writeFileSync("./data/array_objects.json", str, "utf8")
    })
})
