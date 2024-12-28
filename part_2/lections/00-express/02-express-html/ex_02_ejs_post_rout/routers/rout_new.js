const router = require('express').Router();

router.get('/', (req, res) => {
    let fill = {
        lastName: "-Фамилия-",
        rating: 200
    };
    res.render('new', { fill });
});

router.post('/', (req, res) => {
    console.log(req.body); // to control the values
    // let maxId = abiturs.length; // ver_1
    // let maxId = Math.max(...abiturs.map(x => +x.id)); // ver_2
    // let maxId = global.abiturs
    //     .reduce((prevMax, curr) => Math.max(prevMax, +curr.id), 0); // ver_3
    let maxId = +global.abiturs.at(-1).id; // ver_4

    let newAbit = Object.assign(
            { "id": maxId+1 }, 
            req.body,
            { "birthDate": "2002-07-30", "city": "Оса" } // заглушка
        );
    
    global.abiturs.push(newAbit);
    res.redirect('/');
});

module.exports = router;
