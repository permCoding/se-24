// let a1 = new Array(15);
// console.log(a1, Object.keys(a1), a1.length);
// a1[14] = 123456;
// console.log(a1, Object.keys(a1), a1.length);


let a = new Array(5)
    .fill(0)
    .map((_,i) => i+1)
    .reduce((acc, x) => acc+x);
// console.log(a);


function sum_1(acc, x) { return acc + x; }
const sum_2 = (acc, x) => {
    //
    //
    //
    return acc + x;
}
const sum_3 = (acc, x) => acc + x;

let b = new Array(5)
    .fill(0)
    .map((_,i) => i+1)
    // .reduce(sum_3);
    .reduce((acc, x) => acc + x);
console.log(b);

let bin = '11001';

console.log(
    bin
        .split('')
        .reverse()
        .reduce((acc, elm, ind) => acc + elm*2**ind, 0)
);

console.log(
    bin
        .split('')
        .reduceRight((acc, e, i, arr) => acc + e*2**(arr.length-1-i), 0)
);
