const binToDec_1 = (bin) => {
    let mask = 1, dec = 0;
    for (let ch of bin.split("").reverse().join("")) {
        dec += mask * ch;
        mask <<= 1;
    }
    return dec;
}

const binToDec_2 = (bin) => {
    let mask = 1, dec = 0;
    for (let i=bin.length-1; i>=0; i--) {
        dec += mask * bin[i];
        mask <<= 1;
    }
    return dec;
}

let str = 'JavaScript'

module.exports = {
    binToDec_2,
    str,
    binToDec_1
}