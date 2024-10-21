const arr = require('./json/data.json');


const sorted = (arr, field, d='asc') => {
    let q = d=='asc'? +1: -1;
    return arr.sort((a,b) => a[field] > b[field]? +1*q: -1*q);
}

// let field = 'gender';
let field = 'age';

let srt_arr = sorted(arr, field, 'desc'); // asc | desc
console.log(JSON.stringify(srt_arr, null, 2));
