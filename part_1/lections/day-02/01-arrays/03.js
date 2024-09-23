// const a1 = new Array(15);
// console.log(a1);

let a3 = [121, 1276, 4821, 214, 13];

// const func = (elm) => { console.log(elm) };
// a3.forEach(func);

a3.forEach((x, i) => console.log(i, x));

let a4 = a3.filter(_ => true);
console.log(a4);

function check(elm) {
    if (elm % 2 > 0) {
        return true;
    } else {
        return false;
    }
}

a4 = a3.filter(check);
console.log(a4);

a4 = a3.filter(x => x%2);
console.log(a4);
