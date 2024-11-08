// new Array.from()

const ex_01 = () => {
    const numbers = Array.from({ length: 10 }, (v, i) => i + 1);
    console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

const ex_02 = () => {
    const squares = Array.from({ length: 5 }, (v, i) => (i + 1) ** 2);
    console.log(squares); // [1, 4, 9, 16, 25]
}

const ex_03 = () => {
    const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    console.log(randomNumbers); // Массив из 10 случайных чисел от 0 до 99
}

const ex_04 = () => {
    const str = 'hello';
    const charArray_1 = Array.from(str);
    const charArray_2 = str.split('');
    console.log(charArray_1); // ['h', 'e', 'l', 'l', 'o']
    console.log(charArray_2); // ['h', 'e', 'l', 'l', 'o']
}

const ex_05 = () => {
    const rows = 3, cols = 4;
    const grid = Array
        .from(
            { length: rows }, 
            (_, i) => Array.from({ length: cols }, (_, j) => `${i},${j}`)
        );
    console.log(grid);
    /*
        [
            [ '0,0', '0,1', '0,2', '0,3' ],
            [ '1,0', '1,1', '1,2', '1,3' ],
            [ '2,0', '2,1', '2,2', '2,3' ]
        ]
    */
}

ex_05();
