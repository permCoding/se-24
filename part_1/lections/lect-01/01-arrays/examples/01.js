const log = console.log

let a = new Array(5)
log(a, typeof a, a.length)

a[2] = 999
log(a, typeof a)

delete a[2]
log(a, a.length)

let x = 666
log(delete x)
log(x)

let obj = { "a": 0, "b": 1, "c": 2 }
log(delete obj["b"])
log(obj)

delete obj
log(obj)

with (obj) { delete c }
log(obj)

a['2'] = 999
log(a, a.length)

a['a'] = 666
log(a, typeof a)

log(Object.keys(a), a.length)
