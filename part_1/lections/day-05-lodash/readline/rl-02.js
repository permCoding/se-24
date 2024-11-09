const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите строку: ', (input) => {
    let reversed = input.split('').reverse().join('');
    console.log(`Развёрнутая строка: ${reversed}`);
    rl.close(); // Закрываем интерфейс
    process.exit(0); // Завершаем процесс
});