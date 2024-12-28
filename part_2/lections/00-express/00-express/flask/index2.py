from flask import Flask

app = Flask(__name__)

html = """
<style>
    .block {
        font-size: 40px;
        height: 85%;
        width: 100%;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5e5e5e;
        background-size: 25%;
        background-repeat: no-repeat;
    }
</style>
<div class='block'> I'm Python </div>
"""

@app.route('/')
@app.route('/index')
def print_flask():
    return html

app.run()  # default: http://127.0.0.1:5000/
# app.run(host='127.0.0.1', port=8080)

# https://docs-python.ru/packages/veb-frejmvork-flask-python/klass-flask/

