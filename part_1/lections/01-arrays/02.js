(function(...args) {
    console.log(this, args)
}(12,34,56))

if (!Array.prototype.len) {
    Array.prototype.len = function() {
        return this.length
    }    
}

console.log(Object.keys(Array.prototype))

let arr = [1,2,3,4]
console.log(arr, arr.len(), arr.len, arr.len.toString())

console.log(Object.getOwnPropertyNames(Array.prototype))
