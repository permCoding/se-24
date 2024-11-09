const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // интерфейс для ввода и вывода

let lines = []; // массив для хранения считываемых строк

rl // обработчики событий
    .on('line', line => lines.push(line))
    .on('close', () => { // Ctrl+D - для завершения
        lines
            .forEach(x => console.log(x));
});
