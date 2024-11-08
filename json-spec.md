# JSON  

## Немного теории о JavaScript Object Notation (JSON)  

Нотацию JSON используют для организации обмена данными в текстовом формате.  

Язык разметки *JSON* задает описание объектов как пар *{“ключ”: значение}*.  

В паре для «ключа» используют тип string, а в качестве «значения» можно использовать типы: string, number, object (тип JSON), array, boolean (true или false) и null.  

Синтаксис JSON включает следующие правила:  
- Данные записываются в виде пар {“ключ”: значение}.  
- Наименования «ключей» регистрозависимы.  
- Ключ следует заключать в двойные кавычки: `"id"`  
- В фигурных скобках записываются объекты.  
- В квадратных скобках записываются массивы.  
- Данные (в массивах, в объектах) разделяются запятыми.  

---

На оформление JSON (JavaScript Object Notation) файлов не существует официального стандарта, который бы ограничивал его использование, но существуют общепринятые практики и рекомендации.  

Основные моменты, которые следует учитывать при оформлении JSON:  

1. **Структура**: JSON состоит из пар "ключ-значение". Ключи должны быть строками, а значения могут быть строками, числами, объектами, массивами, логическими значениями или `null`.  

2. **Форматирование**: JSON-файлы обычно имеют читаемый вид. Рекомендуется использовать отступы и перевод строки для улучшения читаемости:  

   ```json
   {
       "name": "John",
       "age": 30,
       "isStudent": false,
       "courses": [
           "Math",
           "Science"
       ]
   }
   ```  

3. **Кодировка**: JSON должен использовать кодировку UTF-8.  

4. **Запрет на комментарии**: В отличие от некоторых других форматов, JSON не поддерживает комментарии. Все строки должны быть являются частью данных.  

5. **Проверка на ошибки**: JSON должен быть корректно сформирован, чтобы быть успешно разобран. Например, все строковые ключи должны быть заключены в двойные кавычки.  

---  