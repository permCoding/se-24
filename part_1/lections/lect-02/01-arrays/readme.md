# ЛЕКЦИЯ 2. Массивы

1 Инициализация массива  

2 Функциональные методы  
- map, filter, reduce, every, some, forEach, sort  
- fill()  

3 Array Methods  
- at(2), at(-2), toString(2)  
- includes, indexOf, lastIndexOf, find(func==true), findIndex(func==true)
- join, slice (с отриц индекс), splice, push, pop, shift, unshift, reverse  

4 итераторы: keys(), values(), entries(), iterator.next().value  

---  
---  

## 0. JS Node.js

```js
const express = require('express'); // npm i express

const app = express();

app.get('/', (req, res) => {
    let seconds = new Date().getTime() / 1000;
    res.set('Content-Type', 'text/html');
    res.end(`<H2>seconds = ${seconds}</H2>`)
});

app.listen(3000); // http://localhost:3000/
```

[Ecmascript-language: **Types**](https://tc39.es/ecma262/#sec-ecmascript-language-types)  
[MDN web docs: **Arrays**](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)  

> MDN = Mozilla Developer Network

## 1. Типы данных  

### А. Примитивные типы  

```txt
- Boolean: true, false  
- Number: целые, вещественные, NaN, Infinity (значение бесконечности)  
- BigInt: целые числа произвольной длины  
- string: "str", 'str', `str`  
- symbol: для создания уникальных идентификаторов  
- undefined: переменная объявлена, но ей не присвоено значение
- object: объекты, массивы, null  
- function

```

[NaN является значением, представляющим не-число Not-A-Number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN)  
Symbol(): для создания [уникальных идентификаторов](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-typ)  

### Б. Ссылочные типы  

```txt
- Object
- function
- Array, Map, Set
  методы массива рассмотреть  

  Map и Set - методы сравнить - может на Лекцию 3  
  ассоциативные массивы  
  и задачу сюда с leetcods
  https://leetcode.com/problems/two-sum/  
  двумя способами: сложностью N2 и N  
```

## 2. Array Methods  

- map, filter, reduce, every, some, forEach, sort  
- toString, includes, indexOf, lastIndexOf, find(func==true), findIndex(func==true)
- join, slice (с отриц индекс), splice, push, pop, shift, unshift, reverse  
- итераторы: keys(), values(), entries(), iterator.next().value  

---  
---  

## Структуры данных  

- Stack  
- Queue

- только теорию - реализовать самостоятельно через class  

---  
