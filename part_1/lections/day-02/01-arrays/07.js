const log = console.log;

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
// log(arr);
// log(JSON.stringify(arr, null, 4));
// log(JSON.stringify(arr, null, '____'));
// log(JSON.stringify(arr, ['name', 'age'], 4));
// log(JSON.stringify(arr, ['id', 'age'], 4));

log( ['name', 'age'].includes('name') ); // true
log( ['name', 'age'].includes('id') ); // true

const notFields = ['id', 'first'];
let jsonStr = JSON.stringify(obj_1, (key, value) => (!notFields.includes(key))? value: undefined);
log(jsonStr);

const filtred = (obj, notFields) => {
    let jsonStr = JSON.stringify(
        obj, 
        (key, value) => (!notFields.includes(key))? value: undefined
    );
    return JSON.parse(jsonStr);
}

log(
    JSON.stringify(
        arr.map(x => filtred(x, ['id', 'first'])).sort((a,b) => a.age-b.age), 
        null,
        4
    )
);
