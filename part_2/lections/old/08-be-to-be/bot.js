let get = async (link) => {
    let resp = await fetch(link);
    let json = await resp.json();
    console.log(JSON.stringify(json, ['lastName', 'city'], 4));

    // try {
    //     let resp = await fetch(link);
    //     let json = await resp.json();
    //     console.log(JSON.stringify(json, null, 4));        
    // } catch (error) {
    //     console.log(' - - - ');
    // }
}

let getThen = (link) => {
    fetch(link)
        .then(resp => resp.json())
        .then(json => {
            console.log(JSON.stringify(json, null, 4))
        })
        .catch(() => console.log(' - - - '));
}

let getSync = (link) => {
    let sreq = require('sync-request');
    sreq('GET', link);
    // fetch(link)
    //     .then(resp => resp.json())
    //     .then(json => {
    //         console.log(JSON.stringify(json, null, 4))
    //     })
    //     .catch(() => console.log(' - - - '));
}


let post = () => {}


let host = 'http://[::1]:3000';
let rout = '/abiturs';
let url = `${host}${rout}`;

get(url); // 
// getThen(url+'20');
// getSync(url);
// post();
// let id = 19;
// delete(url, id);