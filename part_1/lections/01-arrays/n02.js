// every, some, forEach, sort
const log = console.log

const ex01 = () => {
    let arr = [1,3,3,0,2,5]
    arr.forEach(x => log(x))
}

const ex02 = () => {
    let arr = [1,3,3,0,2,5]
    let sorted = arr.sort((a,b) => a>b ? +1 : -1)
    log(sorted, '\n', arr)
}

console.clear()
ex02()
