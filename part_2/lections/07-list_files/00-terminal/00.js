const path = require("path");
const log = console.log;

process.stdout.write('\x1Bc'); // очистка консоли

log("."); // версия с относительными путями
log(__dirname); // версия с абсолютными путями

log();

log(__filename); // файл запущенной программы
log(path.parse(__filename).dir); // путь
log(path.basename(__filename)); // имя файла и расш запущенной программы
log(path.parse(__filename).name); // имя без расширения
log(path.parse(__filename).ext); // только расширение
