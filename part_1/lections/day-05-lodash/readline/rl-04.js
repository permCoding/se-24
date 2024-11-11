const fs = require('fs');

console.log('Введите несколько целых чисел:');

const txt = fs.readFileSync(0, 'utf8');

console.log(
    txt
        .split('\n') // lines
        .map(x => +x)
        .filter(x => x%2)
        .reduce((a,b) => a+b, 0)
);

// для завершения ввода используйте 
// Linux:   Ctrl + D
// Windows: Ctrl + Z

// этот способ подходит для Stepik