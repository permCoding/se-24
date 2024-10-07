// let array = require("./json/items.json");
// console.log(array);

let stats = require("./json/statements.json").stats;
// console.log(stats, stats.length);
let ind = Math.floor( stats.length * Math.random() );
console.log(stats[ind]);