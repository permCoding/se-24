// const a1 = new Array(15);
// console.log(a1);
const a2 = new Array(1,2,3,4,5);
console.log(a2, 
    Object.keys(a2), 
    Object.values(a2), 
    Object.entries(a2)
);
console.log(typeof a2);

let a3 = {
    "0": 121,
    "1": 12764821,
    "2": 213,
    "qqq": 13
}

let x = '1';
console.log(a3[x], a3.qqq);

for (let key of Object.keys(a2)) {
    console.log(a2[key]);
}

const func = (elm) => { console.log(elm) };

a3.forEach(func);
