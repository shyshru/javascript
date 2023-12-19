const score = 400
console.log(score)

const balance = new Number(100) //defined in new object of number type
console.log(typeof balance)
console.log(balance)

console.log(balance.toString().length) //converted to string and can perform prototype functions on it


console.log(balance.toFixed(2));

const otherNumber=23.7896
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(1))

//================================================================
const hundreds =  1000000000
console.log(hundreds.toLocaleString()); //US_standard
console.log(hundreds.toLocaleString('en-IN')); //INDIAN_standard


//=================================
console.log(Number.MAX_VALUE)


//++++++++++++++++++MATHS__LIBRARY++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-9))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))



console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max-min+1)) + min)