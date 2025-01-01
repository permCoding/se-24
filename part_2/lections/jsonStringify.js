const getJSON = (obj, fields) => {
    return JSON.stringify(obj, (key, value) => {
        console.log(key in fields, key, fields);
        if (fields.includes(key)) return undefined;
        return value;
    }, 4)
}

const objA = {
    "id": 101,
    "fieldA": "qwerty",
    "fieldB": 2024
}

const arrFieldsDel = ['fieldB'];

console.log(getJSON(objA, arrFieldsDel));

const ex_01 = () => {
    const obj = { a: 1, b: 2, c: 3 };
    console.log('a' in obj); // true
    console.log('d' in obj); // false
}

const ex_02 = () => {
    const arr = [10, 20, 30];
    console.log(0 in arr); // true (индекс 0 существует)
    console.log(1 in arr); // true (индекс 1 существует)
    console.log(3 in arr); // false (индекса 3 нет)
} // оператор in используется для проверки наличия свойства в объекте

const ex_03 = () => {
    const arr = [10, 20, 30];
    console.log(arr.indexOf(20) !== -1); // true
    console.log(arr.indexOf(40) !== -1); // false
}

/*
для проверки наличия элемента в массиве:
- Array.prototype.includes()
- Array.prototype.indexOf()
*/