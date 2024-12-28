const Table = require('cli-table');
const df = require('./dir-files');
const path = require('path');
const fs = require('fs');
const log = console.log;

const printTable_1 = (arr) => {
    console.table(arr);
}

const printTable_2 = (arr) => {
    const table = new Table({
        head: ['type', 'title'],
        colWidths: [8, 20]
    });
    arr.forEach(elm => table.push([elm.type, elm.title]));
    console.log(table.toString());
}

const printTable_3 = (arr) => {
    arr.forEach(e => log(e.type, '\t', e.title));
}

const printTable_4 = (arr) => {
    arr.forEach(e => log(e.type.padEnd(8), e.title.padStart(28)));
}


const Worker = async (pathDir) => {
    log('==> START Worker');

    let items = await df.readDirectory(pathDir);
    let arr = items.map(item => {
        const filePath = path.join(pathDir, item);
        let stats = fs.statSync(filePath);
        if (stats.isFile()) {
            return {'type': 'file', 'title': item};
        } else {
            return {'type': 'folder', 'title': item};
        }
    });
    arr.sort((a,b) => a.type>b.type? -1: +1);

    // printTable_1(arr);
    printTable_2(arr);
    // printTable_3(arr);
    // printTable_4(arr);

    log('==> STOP Worker');
}


let pathDir = __dirname;
Worker(pathDir);
