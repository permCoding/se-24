const arr = require('./data.json');
arr.sort((a,b) => a.name.last > b.name.last? 1: -1);
console.log(arr);