const getNumber = (a, b) =>{
    return a + Math.floor( (b-a+1) * Math.random() );
}

let arr = new Array(100)
    .fill(0)
    .map(_ => getNumber(10, 20));

console.table(arr);

console.log(
    arr
        .filter(x => x%2)
        .join(',')
);
