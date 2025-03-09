const express = require('express'); // npm i express
const csv = require('csvsync'); // npm install csvsync
const fs = require('fs');
const routerPostUser = require('./routers/routerPostUser');

const { HOST, PORT } = require('./config.json').hosting;
global.filename = './json/users.csv'; // адрес локального хранилища
                // global - для видимости в других модулях
const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();
app.set('view engine', 'ejs'); // шаблонизатор - npm i ejs
app.use('/css', express.static('css')); // путь к статичным файлам
app.use(express.json()); // читать объекты в POST
app.use(express.urlencoded({ extended: true })); // объекты с ejs-шаблона

app.use('/postUser', routerPostUser);

app.get(['/getUsers','/'], (req, res) => 
    {
        const opts = {
            skipHeader: false,
            // headerKeys: ['column1', 'column2'],
            returnObject: true,
            delimiter: ',',
            trim: true
        };
        try {
            const csvData = fs.readFileSync(filename, 'utf8');
            const jsonArray = csv.parse(csvData, opts);
            res.json(jsonArray);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }

);

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

// задание: добавить поле gender, обрабоать с radioButton

/*
- объект для тестирования:
    {
        "firstName": "Ирина",
        "lastName": "Кумова",
        "rating": "204"
    }
*/