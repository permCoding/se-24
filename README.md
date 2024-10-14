# se-24
Software Engineering Node.js 2024-2025  


**БЕЛЯКОВ Андрей Юрьевич** - [telegram](https://t.me/AndreyPerm)  

> [Анкетирование и Тестирование - EXAM](http://exam.1gb.ru/)  

> [Дистант | Программная инженерия - bbb](https://bbb.psaa.ru/rooms/4hq-uur-7nl-kgz/join)  
> [Дистант | Программная инженерия - bbb3](https://bbb3.psaa.ru/b/7rq-iir-muo-h58)  
> [Рейтинг группы ПИб-3](https://docs.google.com/spreadsheets/d/1oTw3zL5d-Ngg6Wo80wR53hVOp7tmjnGzaP6s43Yxk-k/edit?usp=sharing)  

| семестр 1 | Лекций | ЛабРаб | Отчётность |
| :-: | :-: | :-: | :-: |
| ПИб-3 | 12 | 8 | Зачёт |

> Курсовой проект - REST-application  
> Representational State Transfer API (передача репрезентативных состояний)  
> HTTP-методы: POST (create), GET (read), PUT (update), DELETE  

##### Что будем изучать:

- Node.js, SQLite, json, regex, потоки, lodash, rambda, express, promise, callback, async  
- разные типы и структуры данных (BigInt, Symbol, Stack, Queue, Map, Set, Object, Array, Tree)  
- функциональное и событийное программирование на JS  
- архитектуру и маршрутизацию web-приложений  

---  

## docs  

> [ECMAScript 6 Edition - 2015](https://262.ecma-international.org/6.0/#sec-ecmascript-data-types-and-values)  
> [Описание языка JS MDN - Mozilla Developer Network](https://developer.mozilla.org/ru/docs/Web/JavaScript)  
> [Учебные материалы JS MDN - Mozilla Developer Network](https://developer.mozilla.org/ru/docs/Learn/JavaScript)  
> [Функциональное программирование JS](https://pcoding.ru/pdf/jsFuncCoding.pdf)  
> [Основы JS - браузер и консоль](https://pcoding.ru/pdf/jsManual.pdf)  
> [rambda docs](https://ramdajs.com/docs/)  
> [rambda examples](https://examplejavascript.com/ramda/)  
> [lodash.com/docs](https://lodash.com/docs/)  
> [docs-lodash.com](https://docs-lodash.com/v4/)  
> [unicode](https://compart.com/en/unicode/block/U+0400)  
> [html-symbols](https://compart.com/en/unicode/html)  

## install  

[Node.js](https://nodejs.org/) | [VS Code](https://code.visualstudio.com/download)  

## links && utils  

> [moment - библиотека для работы со временем](https://momentjs.com/)  
> [lodash - функциональная библиотека](https://lodash.com/)  
> [ramda - функциональная библиотека](https://ramdajs.com/)  
> [Горячие клавиши VSCode](docs/VSCodeHotKeys.md)  
> **Расширение для VSCode** - Node.js Exec (запуск программы F8)  

---  

***Different case styles***:  
• camelCase (used in JS)
• PascalCase (used in JS)
• snake_case
• kebab-case
• lazycase

```txt
npm install название-пакета  // установка пакетов
npm i название-пакета  // можно сокращённо
nvm use v14  // если несколько версий, то можно переключить
автоотслеживание изменений в коде проекта:
- можно использовать модуль nodemon 
- или вместо nodemon: node --watch index.is (работает с версии node 18.11.0)  
- https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#--watch
- можно использ пути (на MacOS и Win): node --watch-=./tests --watch index.js

```

```txt
X.Y.Z Version
MAJOR version -- when you make incompatible API changes,
MINOR version -- when you add functionality in a backwards-compatible manner
PATCH version -- when you make backwards-compatible bug fixes.
```

> [Про разметку md](https://github.com/sandino/Markdown-Cheatsheet/blob/master/README.md)  

```js
// JS DOCs

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
    return () => {
        return n++; // postfix ++
    }
}
```

```
Два способа узнать запущенные процессы на порту и уничтожить их:

Linux  

-1-
  - в терминале найти незакрытый процесс для порта:
`lsof -i:3000`
  - будет примерно такой ответ:
node    273843 andrey   26u  IPv4 1179980      0t0  TCP localhost:3000 (LISTEN)
  - убить процесс в ОС:
`kill -9 273843`

-2-
  - посмотреть список процессов на порту 8080:
fuser 3000/tcp
  - уничтожить процессы на порту 8080:
`npx kill-port 3000`

Windows

  - посмотреть список процессов на порту 8080:
netstat -a -n -o | find "8080"
  или так:
`netstat -na | Select-String "8080"`
  - уничтожить процессы на порту 8080:
`npx kill-port 8080`

заранее установить глобально npx:  

> npm i npx -g  

ещё может потребуется установить ещё и пакет npx-port  
заранее можно не устанавливать - он сам спроит при первом удалении  

```

```
- монитор для отслеживания изменений в js коде:
npm install nodemon -g
- потом запуск такой:
nodemon index.js
```

```
автоподключение mongoDB  
https://www.npmjs.com/package/express-mongo-db

npm install --save express-mongo-db

var app = require('express')();
var expressMongoDb = require('express-mongo-db');

app.use(expressMongoDb('mongodb://localhost/test'));
 
app.get('/', function (req, res, next) {
    req.db // => Db object
});
```

```txt
комменты в review кода  
Praise - похвала
Nitpick - придирка
Issue - проблема
Question - вопрос
Suggestion - предложение
Non-blocking - неблокирующие
```
