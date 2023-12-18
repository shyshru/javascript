const name = "shriyanshi"
const repoCount = 2
//console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Shri");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

//slicing
const newString = gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(-3,2)
console.log(anotherString)

//trim
//
const  url = "https://shri.com/shr%20ii"
console.log(url.replace('%20','-'))
console.log(url.includes("ule"))

//split