const log = console.log

const ex01 = () => {
    let arr = new Array(10)
        .fill(0)
        .map((_, ind) => ind)
    log(arr)
}

const ex02 = () => {
    const get_ind = (elm, ind) => elm+ind 
    let arr = new Array(5)
        .fill(1000)
        .map(get_ind)
    log(arr)
}

const ex03 = (max_num) => {
    let arr = new Array(15)
        .fill(0)
        .map(() => Math.floor(Math.random() * max_num))
        .filter(elm => elm%2 != 0)
    log(arr)
}

const ex04 = (max_num) => {
    let result = new Array(15)
        .fill(0)
        .map(() => Math.floor(Math.random() * max_num))
        .filter(elm => elm%2 != 0)
        .map(elm => { log(elm); return elm })
        .reduce((acc, elm) => elm, 0)
    log(result)
}

const ex05 = () => { // split join
    log(
        new Array(10)
            .fill(0)
            .map((_,i) => i)
            .reverse()
            .join('')
    )
}

const ex06 = () => { // forEach reverse
    "0123456789"
        .split('')
        .reverse()
        // .map(elm => +elm)
        // .map(elm => parseInt(elm))
        .map(elm => Number(elm))
        .forEach(elm => log(elm, typeof elm))
}

const ex07 = () => {
    String.prototype.toArray = function (chr) {
        return this.split(chr)
    }
    let str = "123 webw j456"
    log(str.toArray(''))
}

console.clear()
// ex04(100)
// ex06()
ex07()


// a = new Array(5) int 2b => ** ** ** ** **
// List int 2b => ** ****    ** ****    ** ****

// map filter reduce forEach