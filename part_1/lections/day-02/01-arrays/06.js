let arr = [1, 2, 3, 4];

let a = arr.some(x => x%2 == 0)  // any
let b = arr.every(x => x > 2) // all

console.log(a, b);
