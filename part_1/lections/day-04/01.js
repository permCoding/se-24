const _every = (arr, div=2) => {
    for (let elm of arr) {
        if (elm%div != 0) {
            return false;
        }
    }
    return true;
}

let arr = [14, 20];
let div = 3;

console.log( _every(arr, div) );

console.log( arr.every(x => x % div == 0) ); // all
console.log( arr.every(x => { return x % div == 0 }) ); // all

const check = (elm) => elm % div == 0;
console.log( arr.every(check) ); // all

console.log( arr.some(num => num%div == 0) );  // any
