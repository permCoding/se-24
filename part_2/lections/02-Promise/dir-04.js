// 01 - callback
const fs = require('fs');
const log = console.log;

const getLists = (pathDir, items) => {
    let arrFiles = [];
    let arrFolders = [];
    items.forEach(item => {
        log(`${pathDir}/${item}`);
        fs.stat(`${pathDir}/${item}`, (err, stats) => {
            if (stats.isFile()) {
                arrFiles.push(item);
            } else {
                arrFolders.push(item);
            }
        })
    });
    log(items, arrFiles);
    return { arrFiles, arrFolders };
}

function getListDir(pathDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, (err, items) => {
            if (err) return reject(err); // Если произошла ошибка, отклоняем промис
            let lists = getLists(pathDir, items);
            resolve(lists); // Если все успешно, разрешаем промис с массивом файлов
        });
    });
}

let pathDir = __dirname;

log('==> START');
log('pathDir: ', pathDir);

getListDir(pathDir)
    .then(lists => {
        log(lists);
        log('FILES:', lists.arrFiles);
        return lists.arrFolders;
    })
    .then(folders => {
        log(folders);
    })
    .then(
        log('==> END')
    )
    .catch(error => log('Ошибка при чтении директории:', error));
