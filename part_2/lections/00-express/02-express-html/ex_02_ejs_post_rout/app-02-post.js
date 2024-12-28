const express = require('express');
const { port, host } = require('./config.json');

const app = express();

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

// = = = = = = = 

app.get('/', (req, res) => {
    let keys = Object.keys(titles); // тут выбираем все поля
    res.render('index-01', { titles, arr, keys });
});

app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(','); console.log(keys);
    let sortField = req.query.sortField; console.log(sortField);
    res.render('index-01', 
        {
            keys, 
            titles, 
            arr: arr.sort((a,b)=>a[sortField]>b[sortField]?+1:-1)
            // arr: arr.toSorted((a,b)=>a[sortField]>b[sortField]?+1:-1)
        }
    );
}); // http://localhost:3000/fields?keys=id,lastName,city,gender,rating&sortField=rating


// get и post для пути - /abiturs/fields
app.get('/abiturs/fields', (req, res) => {
    res.render('fields', { titles });
});

app.post('/abiturs/fields', (req, res) => {
    let { keys, sortField, direct } = req.body;
    let d = direct==="asc"? +1: -1;
    res.render('index-01', 
        {
            keys, 
            titles, 
            arr: arr.sort((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
            // arr: arr.toSorted((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
        }
    );
});


// get и post для пути - /abiturs/new
app.get('/abiturs/new', (req, res) => {
    let fill = {
        lastName: "-Фамилия-",
        rating: 200
    };
    res.render('new', { fill });
});

app.post('/abiturs/new', (req, res) => {
    let { lastName, gender, rating } = req.body;
    console.log(req.body);
    let newAbit = {
        "id": arr.length+1,
        "lastName": lastName,
        "rating": rating,
        "gender": gender,
        "birthDate": "2002-07-30",
        "city": "Оса"
    }
    arr.push(newAbit);
    res.redirect('/');
});

app.listen(port, console.log(`http://${host}:${port}`));
