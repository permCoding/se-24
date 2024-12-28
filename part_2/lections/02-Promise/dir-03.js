// 01 - callback
const fs = require('fs');
const log = console.log;


function getListDir(pathDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, (err, files) => {
            if (err) return reject(err); // Если ошибка, отклоняем промис
            resolve(files); // Если успешно, разрешаем промис
        });
    });
}


let pathDir = __dirname;
log('   ==> START');
getListDir(pathDir)
    .then(files => log('Файлы и папки в директории:', files))
    .then(() => log('   ==> END'))
    .catch(error => log('Ошибка при чтении директории:', error));
