# LABRAB-03  

## Node.js - Express - ejs  

> Это продолжение лабораторок 01 и 02  
> В этой лабораторке требуется дополнить программу Роутерами (маршрутизация в отдельных файлах программы) и Шаблонизаторами (получение данных от клиента с web-формы и отправка данных клиенту с выводом в web-форму)  

### Задания для лабораторной работы  

1) задача первая - маршрут `"/"`:  
   - создать стартовую страницу приложения, на которой будут только две кнопки:  
     - отобразить все записи,  
     - добавить новую запись,  
   - стили разработайте сами или возьмите шаблоны кнопок из инета,  
   - таблица стилей пусть будет в `./css/style.css`,  
   - в первой кнопке гиперссылка на `/abiturs`,  
   - во второй кнопке гиперссылка на `/abiturs_post`.  

2) задача вторая - маршрут `"/abiturs"`:  
   - из прошлой работы возьмите файл `exam_balls.json`,  
   - разместите его в папке `json` - `./json/exam_balls.json`,  
   - создайте **маршрут с методом GET** `abiturs`, который возвращает клиенту html-страницу с таблицей, заполненной данными из файла `exam_balls.json`,  
   - таблица стилей пусть будет в `./css/style.css`,  
   - разработать шаблон html-страницы `abiturs.ejs` в формате `*.ejs` для заполнения его данными,  
   - шаблон страницы `abiturs.ejs` хранить в папке `./views/`,  
   - **проверять работу** теперь будете не в Thunder Client, а **в браузере**.  

3) задача третья - маршрут `"/abiturs_post"`:  
   - **разработать метод POST** для добавления объекта в json файл с автоматической индексацией (то есть id номер добавляется автоматически к объекту, пользователь сам НЕ вводит номер новой записи),  
   - в качестве полей новой записи будут поля, которые соответсвуют полям объектов в `./json/exam_balls.json`,  
   всех обектов из файла `./json/exam_balls.json`,  
   - таблица стилей пусть будет в `./css/style.css`,  
   - разработать шаблон html-страницы `abiturs_post.ejs` в формате `*.ejs` для заполнения его данными,  
   - шаблон страницы `abiturs_post.ejs` хранить в папке `./views/`,  
   - проверять работу в браузере (отобразить форму для заполнения данными, после заполнения данными отправить их на сторону сервера и добавить данные в json-файл),
   - напоминаю, что для реализации метода POST потребуется обработать два разных метода:  
     - **GET** - для вывода шаблона web-формы с полями, предназначенными для ввода в них данных об абитуриенте,  
     - **POST** - для считывания заполненных данных с web-формы и передачи их  на сторону сервера,  
     - при переходе по ссылке на `"/abiturs_post"` сначала отображается пустая web-форма с полями для ввода данных, на этой форме есть кнопка `Сохранить данные`, по нажатию на которую произойдёт инициация события POST по маршруту `"/abiturs_post"` и в этом методе данные будут считаны с html-страницы и записаны в json-файл, после чего приложение производите redirect на Главную страницу - маршрут `"/"`.  

---  

Входной файл для работы приложения расположен локально в директории - `./json/`.  
Не забывайте, что Node.js кэширует json-файлы.  

---  

Хост, Порт и другие настройки приложения брать из файла `config.json` или из файла `.env` - это на ваше усмотрение.  

Возможные настройки приложения из файла `config.json`:  

```json
{
    "appName": "exam_balls",
    "dirJSON": "./json/",
    "fileName": "exam_balls.json",
    "hosting": {
        "HOST": "localhost",
        "PORT": 3000
    }
}
```

Возможные настройки приложения из файла `.env`:  

```txt
appName=exam_balls
dirJSON=./json/
fileName=exam_balls.json
HOST=localhost
PORT=3000
```

---  
