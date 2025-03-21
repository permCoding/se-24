# LABRAB-01  

## Node.js - Express - Get Requests  

** использовать следующие библиотеки:**  

> **express** - для организации серверного приложения  
> **sync-request** - для получения файла по url-адресу  

### Задания для лабораторной работы  

Техническое задание.  

Требуется разработать API для одного серверного приложения, используя Node.js + Express.  
В приложении после frontend разработки появится одна web-форма.  
Форма (html) будет заполнятся данными (таблица).  
Данные для заполнения таблицы следует получать из файла csv.  
Исходные данные загружаются из csv-файла по некоторому url-адресу и сохраняются локально.  
А текущие рабочие данные загружаются из локального файла.  
Клик по названию столбца таблицы обеспечивает сортировку по убыванию по этому столбцу.  
Клик по полю id - удаляет текущую запись (строку).  

На этой лабораторке требуется разработать только backend (маршрутизацию и обработку данных без вывода в web-форму).  

---  

Входной файл:  

- `http://pcoding.ru/csv/exam_balls.csv` (файл с исходными данными)  
- `exam_balls.csv` (рабочий файл, расположить в папке /csv рядом с вашей программой - файл `index.js`)  

---  

Хост и Порт - брать из файла `config.json`.  

---  

Маршрутизация приложения (все роутеры с методом GET):  

1) `/getData` - потом это будет отдельная кнопка на форме приложения, а сейчас по запросу по этому пути данные следует получить из url-адреса - `http://pcoding.ru/csv/exam_balls.csv`, сохранить в локальный файл `exam_balls.csv` и вывести данные в виде таблицы на экран терминала (потом они будут выводиться в html);  
  - предполагается, что сначала данные получают из url-адреса, а потом уже работают с локальными данными (их можно изменить, удалить, добавить)  
  - пример запроса: `http://localhost:3000/getData`  
  
2) `/` - открыть локальный файл с данными и вывести все данные в виде таблицы с заголовками в консоль (в будущем - в виде таблицы на html-форме), если файла ещё нет, то вывести пустую таблицу с заголовками;  
  - пример запроса: `http://localhost:3000/`  
  
3) `/fields/:field` - где `field` название поля (заголовок столбца таблицы), по которому может кликнуть мышкой пользователь - тогда ваша программа сортирует по этому полю по убыванию данные и выводит так же в html-таблицу (в нашем случае выводить в терминал); вот список полей: `IdStudent, NameStudent, Sex, BallMath, BallLang, BallInf, IdDirect`  
  - получать название поля из `req.params`  
  - пример запроса: `http://localhost:3000/fields/NameStudent`  
  
4) `/record` - где `num` - это порядковый номер или `id` записи - пользователь может кликнуть в поле id в некоторой записи - в ответ на это ваша программа удаляет эту строку из локального файла и выводит обновлённую таблицу на web-форму.  
  - получать значение num из `req.query`  
  - пример запроса: `http://localhost:3000/record?id=12`  
  
---  

Для обработки csv-файлов есть несколько библиотек, но в этой работе желательно показать базовые навыки работы с синтаксисом JS и умение работать "вручную" с данными.  

---  
