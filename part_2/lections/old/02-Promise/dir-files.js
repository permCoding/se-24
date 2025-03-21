const fs = require('fs');


function getListDir(pathDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, (err, files) => {
            if (err) return reject(err);
            resolve(files);
        });
    });
}


async function readDirectory(pathDir) {
    return await getListDir(pathDir);
}

module.exports = {
    readDirectory
}