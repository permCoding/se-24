// const str = require('fs').readFileSync('./json/statements.json').toString();
// const str = require('fs').readFileSync('./json/statements.json', {encoding:'utf8'});

// let obj = JSON.parse(str);
// console.log(typeof obj, obj.stats[3]);

// let obj = require("./json/statements.json");
// for (let field in obj) {
//     console.log(field, obj[field]);
// }

let stats = require("./json/statements.json").stats;
// console.log(stats, stats.length);
let ind = Math.floor( stats.length * Math.random() );
console.log(stats[ind]);