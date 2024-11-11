const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // интерфейс для ввода и вывода

let lines = []; // массив для хранения считываемых строк

const solver = () => console.log(
    lines
        .map(x => Number(x))
        .filter(x => x%2 != 0)
        .reduce((a,b) => a+b)
);

rl // обработчики событий
    .on('line', line => lines.push(line))
    .on('close', solver);
