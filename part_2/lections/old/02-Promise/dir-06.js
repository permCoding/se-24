const df = require('./dir-files');
const log = console.log;


const Worker = async (pathDir) => {
    log('==> START Worker');

    let arr = await df.readDirectory(pathDir);
    log(arr);

    log('==> STOP Worker');
}


let pathDir = __dirname;
Worker(pathDir);
