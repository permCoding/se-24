process.stdin.resume(); // Включаем "поток" ввода
process.stdin.setEncoding('utf8');

process.stdout.write('Введите строку: ');

const worker = (data) => {
    const input = data.trim();
    console.log('Вы ввели: ', input);    
    if (input.toLowerCase() === 'exit') {
        process.stdin.pause(); // Останавливаем ввод
        console.log('Завершение программы...');
        process.exit(0); // Завершаем процесс
    } else {
        process.stdout.write('Введите строку: ');
    }
}

// Обработчик события 'data' - срабатывает при вводе Enter
process.stdin.on('data', worker);