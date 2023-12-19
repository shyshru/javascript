const myArr = [0,1,2,3,4]

console.log(myArr[2])
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[3])

myArr.push(9)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(78) //element added at the start
console.log(myArr)
myArr.shift() //element removed from the start
console.log(myArr)


console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(2))

const newArray = myArr.join() //converted to string
console.log(newArray)
console.log(typeof newArray)


//slice,splice
console.log("A" , myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B" , myArr)

//in splice .slice as well as original array effected
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("c", myArr)



