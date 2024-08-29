const log = console.log

const ex01 = () => {
    const change = (elm, ind) => elm+ind
    let arr = new Array(5).fill(100)
    let mapped = arr.map(change)  // LINQ => Select
    log(arr, mapped)    
}


const ex02 = () => {
    let arr = new Array(10)
        .fill(0)
        .map((_, i) => i)
        .filter(x => x%2 != 0)
    log(arr)
    log(arr.reduce((acc, cur) => acc + cur, 1000))
}

const ex03 = () => {
    let arr = new Array(10)
        .fill(0)
        .map(() => Math.floor(Math.random()*10))
    log(arr)
    delete arr[2]
    log(arr.length, arr)
    arr.length = 8
    log(arr.length, arr)
}

console.clear()
ex03()

// Array.prototype.weee = () => {

// }

// let arr = new Array(10).fill(0)

// arr.weee