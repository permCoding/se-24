const log = console.log

let arr = [10,30,50,5,100];

// log(arr.map( (elm, i) => elm * i) )

// log( arr.filter(elm => elm % 10 == 0) )

log( arr.reduce( (acc, elm) => acc+elm, 0) );
