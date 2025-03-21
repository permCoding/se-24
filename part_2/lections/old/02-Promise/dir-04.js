const fs = require('fs');
const log = console.log;


function getListDir(pathDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, (err, files) => {
            if (err) return reject(err);
            resolve(files);
        });
    });
}


async function readDirectory(pathDir) {
    try {
        const files = await getListDir(pathDir);
        log('Файлы и папки в директории:', files);
    } catch (error) {
        log('Ошибка при чтении директории:', error);
    }
}


let pathDir = __dirname;
log('   ==> START');
readDirectory(pathDir);
log('   ==> END') // fail :(
