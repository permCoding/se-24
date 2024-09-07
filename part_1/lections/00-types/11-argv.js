console.log(process.argv);

let nums = process.argv.slice(2,).map(x => +x);

console.log(nums);

//  node .\11-argv.js 11 22 33 44 55