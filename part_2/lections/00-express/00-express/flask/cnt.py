from flask import Flask
import json


app = Flask(__name__)

@app.route('/')
def print_flask():
    f = open('counter.json', 'r')
    data = json.load(f)
    f.close()
    data["counter"] += 1
    fw = open('counter.json', 'w')
    json.dump(data, fw, indent=4)
    fw.close()
    return f'count = {data["counter"]}'

# app.run()
app.run(host='127.0.0.1', port=8080)



