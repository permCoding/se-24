const arr = [0,1,2,3,4,5]

console.log(arr.at(2))

console.log(arr.at(-2))

arr[0] = 666

try {
    arr = [999, 888]  // к константе нельзя присваивать
} catch (error) {
    console.error(error.message)
}

