global.b = 30;

let a = 10;

if (a < 15) {
    let a = 20; // новая переменная a в блочной области видимости
    console.log(a); // 20
    global.b += a;
}

console.log(a); // 10
console.log(global.b); // 10
