// методы массивав в js - https://learn.javascript.ru/array-methods

const ex01 = () => {
    a = [1, [2, 3], 4]

    console.log(a)
    console.log(a.flat())

    a = [1, [2, 3, [5, 6]], 4]

    console.log(a)
    console.log(a.flat())
    console.log(a.flat(1))
    console.log(a.flat(2))

    a = [1, 2, 4]
    console.log(a)
    console.log(a.flatMap(x => [x, x**3]))
}

const ex02 = () => {
    a = [1, 2, 4]
    console.log(a)
    console.log(a.reduce((acc, cur) => acc+cur, 0))
    console.log(a.reduceRight((acc, cur) => acc+cur, 0))

    console.log(a.every(x => x%2!==0))
    console.log(a.some(x => x%2!==0))

    a = [1, 3, 5]
    console.log(a.every(x => x%2!==0))
}

const ex03 = () => {
    a = [1, 3, 5, 7, 8, 9]

    console.log(a.slice(1, 2), a) // вырезанные, оставшиеся
    console.log(a.slice(-2), a) // вырезанные, оставшиеся

    console.log(a.splice(1, 2), a) // вырезанные, оставшиеся
    console.log(a.splice(-2,), a) // вырезанные, оставшиеся

    a.splice(1, 0, 666, 777) // вставить с индекса 1 (удалив 0 элементов)
    console.log(a) // оставшиеся
    a.splice(-2, 1) // с минус второй позиции удалить один элемент
    console.log(a) // оставшиеся

    console.log(a.slice(1, -1)) // срез массива с индекса 1 до минус 1 не включая правый
    
    s = 'array'
    console.log(s.slice(1, -1)) // срез строки с индекса 1 до минус 1 не включая правый
    console.log(s.slice(0, s.length+1)) // все символы строки в новую строку
}

const ex04 = () => {
    a = [2, 4, 6, 33, 8]
    console.log(a.find(x => x%2!=0))
    console.log(a.findIndex(x => x%2!=0))
}

console.clear()
ex04()
