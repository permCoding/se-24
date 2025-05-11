const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {
        'id': 1,
        'name': 'Иван'
    }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = { "id": req.body.id, "name": req.body.name };
    users.push(user);
    res.status(201).send();
});

app.get('/users/load', (req, res) => {
    users = require('./users.json');
    if (users == null) {
        res.status(400).send('Cannot find users');
    } else {
        res.status(200).json(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (user == null) {
        res.status(400).send('Cannot find user');
    } else {
        res.status(200).json(user);
    }
});

app.listen(3000);
