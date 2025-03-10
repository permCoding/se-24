const express = require('express'); // npm i express
const decache = require('decache'); // для отмены кэширования json
const { writeFileSync } = require('fs'); // sync
const { HOST, PORT } = require('./config.json').hosting;
const { dirJSON, fileName } = require('./config.json');
const filename = `${dirJSON}${fileName}`; // адрес локального хранилища
const log = console.log;
// const { log } = require("console"); // https://nodejs.org/api/console.html

let abiturs = null; // для хранения массива данных
// let index = null; // можно и через глобальную переменную

const app = express();

app.use(express.json()); // для распознавания объектов в post put patch

app.use((req, res, next) => { // middleware
    decache(filename); // отключаем кеширование для файла
    abiturs = require(filename);
    next();
});

/**
 * проверяем тип запроса, наличие и корректность параметра
 * добавляем в req индекс объекта
 * @param {*} req 
 * @returns boolean
 */
const checkId = (req, res) => {
    const methods = ['PUT', 'PATCH', 'DELETE'];
    log(req.method, req.params);
    if (!methods.includes(req.method)) {
        log(req.method);
        return false; 
    } else {
        if ((req.params.id === undefined) || (isNaN(req.params.id))) { 
            log(req.params.id);
            return false;
        }
        req.index = abiturs.findIndex(x => x.id == req.params.id);
        if (req.index === -1) {
            log(req.index);
            return false;
        }
    }
    return true;
}

// http://localhost:3000/abiturs
// http://127.0.0.1:3000/abiturs
// http://[::1]:3000/abiturs
app.post('/abiturs/', (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    let obj_old = abiturs.at(-1);
    // let obj_new = { 
    //     "id": id,
    //     "rating": obj_old.rating,
    //     ...
    // };
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    writeFileSync(filename, JSON.stringify(abiturs, null, 4), 'utf8');
    res.json(abiturs);
}); 

app.put('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        // abiturs[req.index] = req.body; // так без id
        let id = +req.params.id;
        abiturs[req.index] = { id, ...req.body }; // так с id
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://[::1]:3000/abiturs/20

app.patch('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        abiturs[req.index] = { ...abiturs[req.index], ...req.body }; // ver1
        // abiturs[req.index] = Object.assign(abiturs[req.index], req.body) // ver2
        // ver3 циклом по переданным полям
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://[::1]:3000/abiturs/20

app.delete('/abiturs/:id', (req, res) => { 
    if (checkId(req, res)) { 
        abiturs.splice(req.index, 1);
        let jsonStr = JSON.stringify(abiturs, null, 4);
        writeFileSync(filename, jsonStr, 'utf8');
        res.status(200).json(abiturs);
    } else {
        res.status(404).end();
    }
}); // http://[::1]:3000/abiturs/20

app.get(['/abiturs','/'], (req, res) => res.json(abiturs) );

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
так как нет GUI, то тестировать в Thunder Client или PostMan
  POST  - создать новую запись, объект, ресурс
  PUT   - перезаписать существующий объект, не указанные поля потеряются
  PATCH - перезаписать поля существующего объекта, не указанные поля сохранятся старыми

200 - запрос был успешным и сервер возвращает актуальное представление ресурса
204 - запрос был успешным, но нет содержимого для возвращения
часто используется в ответ на запрос DELETE
когда ресурс был успешно удален и нет необходимости возвращать данные

объект для тестирования:
{
    "lastName": "Кумова",
    "rating": "204",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}

PUT работает как присваивание к существующей переменной, 
то есть нужно обновлять все поля существующего объекта
кто не обновился, тот потерялся

PATCH (заплатка) - обновит указанное поле, не теряя уже существующие поля
обновим существующий объект по id == 20 и запишем туда объект: 
{ "rating": "222" }
*/