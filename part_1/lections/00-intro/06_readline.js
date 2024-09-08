const utils = require('./03_module');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let quest = 'Введите двоичное число: ';
console.log(quest);
process.stdout.write(quest);

let lines = []; // массив для хранения считываемых строк

rl
    .on('line', line => lines.push(line)) // считать все строки в массив
    .on('close', () => { // после окончания считывания обработать массив
        solver(lines);
});

const solver = (lines) => {
    let dec = utils.binToDec(lines[0]);
    console.log(`ответ = ${dec}`);
}

/*
    на вход в программу подаётся одна строка
    в строке через пробел записаны два натуральных числа
    найти сумму чисел

    для остановки ввода нажмите Ctrl+C
*/

/*
Console.prototype.log = function() {
    this._stdout.write(util.format.apply(this, arguments) + '\n');
};
*/