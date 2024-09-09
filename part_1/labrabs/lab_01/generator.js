const getObject = () => {
    let w = Math.floor( 10 + 90 * Math.random() );
    let p = Math.floor( 100 + 900 * Math.random() );
    return { "w": w, "p": p }
}

let arr = new Array(100).fill(0).map(_ => getObject() );

require('fs').writeFileSync('./items.json', JSON.stringify(arr, null, 4));

// console.log( arr );
