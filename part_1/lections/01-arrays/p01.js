const log = console.log

const ex01 = () => {
    let a = 12, b = a
    a += 2
    log(a, b)    
}

const ex02 = () => {
    let a = [1, 2, 3, 4, 5]
    let b = a
    a[0] += 200
    log(a, b)  
}

const ex03 = () => {
    let a = [1, 2, 3, 4, 5, 6]
    let b = a.slice(0, a.length)
    a[0] += 200
    log(a, b)
}

console.clear()
ex03()
