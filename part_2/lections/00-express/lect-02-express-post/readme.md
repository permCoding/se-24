# requests  

[Список кодов состояния сервера - response](
https://ru.wikipedia.org/wiki/список_кодов_состояния_HTTP)  

Где можно тестировать приложение:  

- Thunder client (VSCode), (в некоторых системах localhost требуется заменить на [::1] - http://[::1]:3000/abiturs)  
- Browser  
- PostMan  

---  

https://developer.mozilla.org/ru/docs/Web/HTTP/Methods  

**Http-Methods:**  

```txt
Get Requests
-- Route Params
-- Query Params
Post Requests
Put Requests
Patch Requests
Delete Requests
Head Requests (только загловки)  
Options (узнать параметры соединения)  
Trace (для тестирования)  
```

Безопасные методы: Get и Head.  
Идемпотентные: Get, Head, Put и Delete.  
(при повторном применении тот же результат)  

---  

Middleware

---  

my-express-app/
│
├── node_modules/          # установленные зависимости
│
├── src/                   # исходный код приложения
│   ├── controllers/       # маршрутизаторы и логика обработки запросов
│   ├── models/            # модели данных и схемы
│   ├── routes/            # маршруты (определение API контроллеров)
│   ├── middlewares/       # промежуточные обработчики запросов
│   ├── services/          # бизнес-логика приложения или сторонние API
│   ├── utils/             # вспомогательные функции или утилиты
│   ├── config/            # конфигурационные файлы (например, для окружения)
│   └── app.js             # основной файл приложения, где инициализируется Express
│
├── public/                # статические файлы (CSS, JS, изображения)
│
├── tests/                 # тесты (юнит-тесты, интеграционные тесты)
│
├── .env                   # файл с переменными окружения
├── .gitignore             # содержит файлы и папки, игнорируемые Git
├── package.json           # описание проекта и зависимости
└── README.md              # документация проекта

---  

validator  
https://express-validator.github.io/docs/  

---  

cookies  
F12 / Dev Panel / Application / Cookies  

---  

```js
const log = console.log; 
const jsonData = pm.response.json();
let limit_ball = 198;
log(`limit_ball = ${limit_ball}`);

pm.test("test_", () => {
   
    let filtered = jsonData
        .filter(obj => obj.rating >= limit_ball)
        .sort((a,b) => a.rating-b.rating);

    log(
        JSON.stringify(
            filtered, 
            ['lastName','rating'], 
            4
        )
    );

    pm.response.to.have.status(200); 
});
```

---  

Файл .env используется для хранения переменных окружения, таких как конфигурация базы данных, секретные ключи и другие параметры, которые могут варьироваться в зависимости от окружения (разработка, тестирование, продакшен).  

Пример:  

```txt
# Настройки приложения
APP_PORT=3000                          # Порт, на котором будет работать приложение
APP_ENV=development                     # Окружение (development, testing, production)

# Настройки базы данных
DB_HOST=localhost                       # Хост базы данных
DB_PORT=5432                            # Порт базы данных (например, для PostgreSQL)
DB_NAME=mydatabase                      # Имя базы данных
DB_USER=myuser                          # Имя пользователя базы данных
DB_PASSWORD=mysecretpassword            # Пароль пользователя базы данных

# Настройки для JWT (если используется)
JWT_SECRET=my_jwt_secret_key           # Секретный ключ для подписи JWT
JWT_EXPIRATION=3600                     # Срок действия JWT в секундах (1 час)

# Настройки для внешних API (если необходимо)
API_KEY=my_api_key                     # Ваш ключ API
API_URL=https://api.example.com        # URL внешнего API

# Настройки почтового клиента (например, для отправки писем)
EMAIL_SERVICE=Gmail                     # Услуга почтового клиента
EMAIL_USER=myemail@example.com          # Ваша почта
EMAIL_PASSWORD=your_email_password      # Пароль от почты

# Настройки для кэша или других сервисов
CACHE_HOST=localhost                    # Хост сервиса кэширования
CACHE_PORT=6379                         # Порт сервиса кэширования (например, для Redis)
```

Чтобы подключить переменные окружения:  
`npm install dotenv`  

Пример использования переменных окружения:  

```js
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.APP_PORT || 3000;

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

app.listen(PORT, () => { console.log(`${PORT}`) });
```

Файл .env не должен включаться в систему контроля версий Git. Убедитесь, что он указан в вашем файле .gitignore, чтобы избежать случайной утечки конфиденциальной информации.  

---  
