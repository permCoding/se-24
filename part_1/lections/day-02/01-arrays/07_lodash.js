const _ = require('lodash');
const log = console.log;

let arr = [
    {
        'id': 1024,
        'name': {
            'first': 'Андрей',
            'second': 'Беляков'
        },
        'age': 52
    },
    {
        'id': 44,
        'name': {
            'first': 'Аннушка',
            'second': 'Якубивич'
        },
        'age': 15
    }
];

log(_.pick(arr[0], ['name', 'age']));

const newArr = arr.map(x => _.pick(x, ['name', 'age']));

log(newArr);
