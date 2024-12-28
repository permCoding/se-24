// 01 - callback
const fs = require('fs');
const log = console.log;

function getListDir(pathDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, (err, files) => {
            if (err) return reject(err); // Если произошла ошибка, отклоняем промис
            resolve(files); // Если все успешно, разрешаем промис с массивом файлов
        });
    });
}

let pathDir = __dirname;

log('==> START');
log('pathDir: ', pathDir);

getListDir(pathDir)
    .then(files => log('Файлы в директории:', files))
    .then(() => log('==> END'))
    .catch(error => log('Ошибка при чтении директории:', error));
