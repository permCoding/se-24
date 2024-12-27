// npm install lodash
// глубокое клонирование 

// const _ = require('lodash');

let source = {
    id: 102,
    name: 'Alex',    
    private: {
        age: 22,
        gender: true
    }
};


// let target = _.cloneDeep(source)
// let target = structuredClone(source)
let target = JSON.parse(JSON.stringify(source))

source.id += 1; // все поля независимы
source.private.age = 50; // все поля независимы
source.private.gender = false; // все поля независимы

console.log('source =', source);
console.log('target =', target);

/*
У метода JSON.parse(JSON.stringify(source)) есть ограничение:
  — копируемые данные должны быть сериализуемы.

Вот примеры несериализуемых данных: 
  - примитив undefined, функция, symbol 
  - при вызове JSON.stringify получаем undefined

Массивы и объекты - сериализуемы. 
Что будет если у них в качестве ключа или значения будут несериализуемые данные?

- для массивов: такие значения будут превращены в null;
- для объектов: такие значения будут опущены, 
  а если symbol является ключом объекта, 
  то он будет проигнорирован, даже при использовании функции replacer.
*/