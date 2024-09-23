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

let arr = [obj_1, obj_2];
console.log(arr);

console.log(JSON.stringify(arr, null, 4));

// console.log(JSON.stringify(arr, ['name', 'age'], 4));
