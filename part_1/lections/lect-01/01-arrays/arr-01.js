// let arr = [0,1,2,3,4]

// let arr = Array.of('0','1','2','3','4')

// let arr = 'a,b,c,d,e'.split(',')

// let arr = new Array(1,2,3,4,5);

// let arr = new Array();
// for (let i=0; i<5; i++) { arr.push(i+1); }

// let arr = Array.from( { length: 10 }, (_, i) => i*i)

// let arr = Array(10).fill(0).map((_, i) => i*i)

let arr = new Array(5);
arr[2] = 222;
arr[arr.length-1] = 999;
arr['3'] = 333;

Array.prototype.count = function () {
    return this.filter(x => x !== undefined).length
}

console.log(arr, arr.length, arr.count());
