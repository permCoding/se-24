const log = console.log

let x = 2, y = 1, m = 16, n = 32
// let b = --x == y++ && 20 * 20 > 30
// let b = (--x == y++) && (20 * 20 > 30)
// let b = --x == y++ && m<<1 > ~-n
let b = (--x == y++) && (m<<1 > ~(-n))
log(b)

log(true == 10)
log(10 == 10 == 10)
