const arr = require('./json/data.json');

// arr.sort( (a,b) => a.age - b.age );
arr.sort( (a,b) => a["age"] - b["age"] );
// arr.sort((a,b) => a.name.last > b.name.last? +1: -1);
// arr.sort((a,b) => a.name["last"] > b.name["last"]? +1: -1);

// console.log(JSON.stringify(arr, ["age", "gender"], 2));
// console.log(JSON.stringify(arr, ["name"], 2)); // -
console.log(JSON.stringify(arr, null, 2));
// console.log(JSON.stringify(arr, null, "___"));

