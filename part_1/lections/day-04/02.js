let arr = [0, 1, 32, 3, 4]; // elm, ind, arr


function check(elm, i) { return elm == i; }
const _check = (elm, i) => elm == i;

console.log( arr.every((elm, i) => elm == i) );
console.log( arr.every(check) );
console.log( arr.every(_check) );
