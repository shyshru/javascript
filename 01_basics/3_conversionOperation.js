let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
//if suppose we take "33abc" in score and convert it to Number it will convert it and its value will be Nan =>not a number
//"33abc"=>Nan
//if suppose we take "null" in score and convert it to Number it will convert it and its value will be 0
//if suppose we take "undefined" in score and convert it to Number it will convert it and its value will be Nan =>not a number
//if suppose we take "true/false" in score and convert it to Number it will convert it and its value will be 1/0
//if suppose we take "abc" in score and convert it to Number it will convert it and its value will be Nan =>not a number

//boolean conversion
let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//empty string "" => false
//"abc" => true

//string conversion
let num=3
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)

console.log(1+2)
console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)
console.log(+true)
console.log(+"")

let gameCounter=100
gameCounter++;
console.log(gameCounter)
//prefix and postfix operator