let obj_1 = {
    'id': 1024,
    'name': {
        'first': 'Андрей',
        'second': 'Беляков'
    },
    'age': 52
}
let obj_2 = {
    'id': 44,
    'name': {
        'first': 'Аннушка',
        'second': 'Якубивич'
    },
    'age': 15
}

let arr = [];

arr.push(obj_2);
arr.push(obj_2);
arr.push(obj_1);
arr.push(obj_2);
arr.unshift(obj_1);
arr.shift();
arr.pop();
console.log(arr)