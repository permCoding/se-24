const csvtojson = require('csvtojson'); // npm i csvtojson
const fs = require('fs');

const csvFilePath = './json/users.csv';
const jsonFilePath = './json/users.json';

const doCsvToJson = async () => {
    try {
        const jsonObj = csvtojson()
            .fromFile(csvFilePath)
            .then(data => data);

        const jsonData = await jsonObj; // Ожидаем результат Promise

        let strJSON = JSON.stringify(jsonData, null, 2);
        
        fs.writeFileSync(jsonFilePath, strJSON, 'utf-8');

        console.log('CSV преобразован в JSON синхронно');

    } catch (err) {
        console.error('Ошибка при преобразовании:', err);
    }
}

doCsvToJson();
