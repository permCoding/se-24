const ex_01 = (obj) => {
    console.log(Object.entries(obj));

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }    
}

const ex_02 = (obj) => {
    const arrOfArr = Object.entries(obj);
    console.log(arrOfArr);
    arrOfArr[1][1] += 1;
    const newObj = Object.fromEntries(arrOfArr);
    console.log(newObj);
}

const obj = { name: 'Петя', age: 21 };
console.log(obj);
ex_01(obj);
