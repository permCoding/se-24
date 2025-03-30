const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./people.db');

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON;"); // Включаем поддержку внешних ключей

  db.run("INSERT INTO Cities (idCity, cityName) VALUES (4, 'Барда')", (err) => {
    if (err) {
      console.error("Ошибка при вставке:", err.message);
    }
  });

  db.run("INSERT INTO People (name, idCity) VALUES ('Мохова', 4)", (err) => {
    if (err) {
      console.error("Ошибка при вставке:", err.message);
    } else {
      console.log("Человек успешно добавлен!");
    }
  });

  db.close();
});