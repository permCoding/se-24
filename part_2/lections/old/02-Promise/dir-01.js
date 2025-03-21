// 01 - callback
const fs = require('fs');

let dir_app = __dirname;

let arr = [];
fs.readdir(dir_app, function (err, items) {
    items.forEach(item => {
        fs.stat(`${dir_app}/${item}`, (err, stats) => {
            if (stats.isFile()) {
                arr.push(item);
            }
        })
    });
});

console.log('directoria: ', dir_app);
console.log(arr); // [] - пустой
