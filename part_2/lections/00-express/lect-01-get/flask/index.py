from flask import Flask

app = Flask(__name__)

@app.route('/')
def print_flask():
    return '= Flask ='

app.run()
# app.run(host='127.0.0.1', port=8080)

# https://docs-python.ru/packages/veb-frejmvork-flask-python/klass-flask/

