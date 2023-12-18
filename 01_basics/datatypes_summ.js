//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp)
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shriyanshi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myFunction);
// https://262.ecma-international.org/5.1/#sec-11.4.3

//================================================
//Stack(Primitive), Heap(Non-Primitive)
let myNickname = "tina"
let anotherName = myNickname
anotherName = "diya"
console.log(anotherName)
console.log(myNickname)

let userOne = {
    email:"user@google.com",
    upi: "user@sbi"
}
let userTwo = userOne
userTwo.email = "usertwo@yahoo.com"
console.log(userOne.email)