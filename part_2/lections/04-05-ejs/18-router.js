const express = require('express');
const routerPostUser = require('./routers/routerPostUser');
const routerGetUsers = require('./routers/routerGetUsers');
const { HOST, PORT } = require('./config.json').hosting;
global.filename = './json/users.csv'; // адрес локального хранилища

const app = express();

app.set('view engine', 'ejs'); // шаблонизатор - npm i ejs
app.use('/css', express.static('css')); // путь к статичным файлам
app.use(express.json()); // читать объекты в POST
app.use(express.urlencoded({ extended: true })); // объекты с ejs-шаблона

app.use('/postUser', routerPostUser); // подключили роутер PostUser
app.use(['/getUsers','/'], routerGetUsers); // подключили роутер GetUsers

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

/*
ИТАК: web-риложение Node.js + Express строим по шаблону MVC - Model-View-Controller

  Модель (Model): 
Отвечает за взаимодействие с данными. Обычно это классы или функции, 
которые выполняют операции CRUD (Create, Read, Update, Delete) 
с базой данных или другими источниками данных. 
Модель не знает ничего о представлении (View) и контроллере (Controller).

  Представление (View): 
Отвечает за отображение данных пользователю. 
В приложении Node.js + Express с использованием серверного рендеринга 
(например, с шаблонизаторами EJS, Pug, Handlebars) это шаблоны, 
которые принимают данные от контроллера и генерируют HTML. 
Если приложение является API (например, REST API), представление часто 
сводится к форматированию данных в JSON или XML.

  Контроллер (Controller): 
Является посредником между моделью и представлением. 
Он получает запросы от клиента, обрабатывает их, 
вызывает методы модели для получения или изменения данных, и 
затем передает эти данные в представление для отображения. 
Контроллер не знает ничего о конкретной реализации модели 
(он взаимодействует с моделью через интерфейс).

---  

Конкретно в фреймворке Express:

Маршруты (Routes): Определяются с помощью:
- express.Router() или 
- непосредственно в приложении 
  - app.get(), app.post(), app.put(), app.delete(). 
Маршруты определяют, какой HTTP-метод и URL-адрес будут обрабатываться определенным обработчиком.

Обработчики маршрутов (Route Handlers): 
Это функции, которые вызываются, когда приходит запрос по определенному маршруту. 
Именно в этих функциях происходит основная логика контроллера:
  1) Анализ запроса 
    - параметров URL - params и query, 
    - данных в теле запроса - req.body
  2) Вызов методов модели для получения или изменения данных
  3) Обработка ошибок
  4) Передача данных в представление (или отправка JSON-ответа, если это API)
  5) Редирект на другой маршрут
*/