## класс Flask  

---  

### Если без виртуального окружения:  

sudo apt-get install python3-flask  

в файле программы сделать app.run()  

запускать обычным образом:  
python app.py  

---  

### Если с виртуальным окружением:

Активировать виртуальное окружение нужно перед каждым сеансом работы.  
После деактивировать.  

https://proglib.io/p/samouchitel-po-python-dlya-nachinayushchih-chast-23-osnovy-veb-razrabotki-na-flask-2023-06-27  

https://routerus.com/how-to-install-flask-on-ubuntu-18-04/  

```
добавить в линукс пакет для создания виртуальных окружений: 
sudo apt install python3-venv
    # apt install python3.11-venv

установить в текущий проект виртуальное окружение venv:
- находитесь в папке проекта -
python -m venv venv

активировать:
source venv/bin/activate

установить в окружение пакет Flask:
pip install flask

запустить:
python app.py

деактивация venv:
deactivate
```

