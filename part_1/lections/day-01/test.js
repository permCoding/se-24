function doIt(a=10, b=0) {
    for (var i=0, j=9; i < a || j > b; ++i, --j) {
        if (i == j) { 
            break;
        }
    }
    return [i, j];
}

console.log( doIt() );
