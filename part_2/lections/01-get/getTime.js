const fs = require('fs');
const filePath = 'counter.log';

const tm = new Date();

// console.log(`время: ${tm / 1_000} секунд`);

console.log(tm);

fs.appendFile(filePath, `${tm}\n`, (err) => {
    if (err) {
        console.error('Ошибка при записи в файл:', err);
    } else {
        console.log('Запись добавлена успешно!');
    }
});

