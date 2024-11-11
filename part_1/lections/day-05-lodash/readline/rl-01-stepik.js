const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // интерфейс для ввода и вывода

let lines = []; // массив для хранения считываемых строк

const solver = () => console.log(
    lines[0]
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0)[0]
    );

rl // обработчики событий
    .on('line', line => lines.push(line))
    .on('close', solver);
