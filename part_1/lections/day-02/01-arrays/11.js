const arr = require('./persons.json');

console.log(arr.length);
console.log(arr[0]);

arr[0].id = 999;
arr[2]['id'] = 2;

arr.sort((a, b)  => a.id - b.id);
console.log(arr);

arr.sort((a, b)  => a.name.second > b.name.second? +1: -1);
console.log(arr);
