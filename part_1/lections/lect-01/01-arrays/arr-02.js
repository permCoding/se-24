let ascii_codes = [65, 66, 67, 68, 69]

let arr = []
ascii_codes.forEach(x => arr.push(String.fromCharCode(x)))
console.log('>>>', arr.join(''))

console.log(arr);
console.log(arr.length, typeof arr, Object.keys(arr), Object.entries(arr));

console.log(ascii_codes);
ascii_codes.map(code => String.fromCharCode(code)).forEach(elm => console.log(elm));

// console.log("A".charCodeAt(0));
// console.log(String.fromCharCode(65));
