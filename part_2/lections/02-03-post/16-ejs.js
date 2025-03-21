const express = require('express'); // npm i express
const csv = require('csvsync'); // npm install csvsync
const fs = require('fs');

const { HOST, PORT } = require('./config.json').hosting;
const filename = './json/users.csv'; // адрес локального хранилища

const log = console.log;

let abiturs = null; // для хранения массива данных

const app = express();
app.use(express.json()); // читать объекты в POST

app.post('/postUser', (req, res) => {
    let { firstName, lastName, rating } = req.body;
    fs.appendFileSync(filename, `${firstName},${lastName},${rating}\n`, 'utf8');
    res.send(`добавили запись`);
});

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

/*
- объект для тестирования:
    {
        "firstName": "Ирина",
        "lastName": "Кумова",
        "rating": "204"
    }
*/