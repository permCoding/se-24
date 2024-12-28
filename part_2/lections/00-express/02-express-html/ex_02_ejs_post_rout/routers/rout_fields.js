const router = require('express').Router();

/**
 * это временная функция - использовать во время разработки
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const mfCheckBody = (req, res, next) => {
    console.log('>>> Current date: ', (new Date(Date.now())).toDateString());
    console.log(`>>> checkBody -> post-body: ${JSON.stringify(req.body, null, 2)}`);
    next();
}

// router.use(mfCheckBody);

router.get('/abiturs/fields', (req, res) => {
    res.render('fields', { titles: global.titles });
});

router.post('/abiturs/fields', (req, res) => {
    // console.log(`post-body: ${JSON.stringify(req.body, null, 2)}`);
    let { keys, sortField, direct } = req.body;
    let d = direct==="asc"? +1: -1;
    res.render('index-01', 
        {
            keys, 
            titles: global.titles, 
            arr: global.abiturs.sort((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
            // arr: global.abiturs.toSorted((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
        }
    );
});

router.get('/', mfCheckBody, (req, res) => {
    res.render('index-01', { 
        titles, 
        arr: global.abiturs, 
        keys: Object.keys(global.titles)
    });
});

module.exports = router;
