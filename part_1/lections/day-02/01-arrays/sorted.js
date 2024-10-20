const log = console.log;
const _ = require('lodash');

let arr = require('./data.json');
// >>> sorted:  1) gender DESC  2) age ASC

const ex_01 = () => {
    // log(JSON.stringify(arr, null, 4));
    arr.sort((a,b) => a['age']>b['age']? -1: +1);
    log(JSON.stringify(arr, null, 4));
}

const ex_02 = () => {
    arr.sort((a,b) => {
        if (a['gender'] !== b['gender']) 
            return a['gender'] > b['gender']? -1: +1;
        return a['age'] > b['age']? +1: -1;
    });
    log(JSON.stringify(arr, null, 4));
}

const ex_03 = () => {
    let srtArr = _.orderBy(arr, ['gender','age'], ['desc','asc']);
    log(JSON.stringify(srtArr, null, 4));
}

// ex_01();
// ex_02();
ex_03();
