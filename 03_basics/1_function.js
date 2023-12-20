function sayMyName(){
    console.log("shriyanshi")
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)

// }
// // addTwoNumbers()
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(8,9)
// console.log(result)  //why undefined

function addTwoNumbers(number1,number2){
    // let result = number1+number2 
    // return result
    return number1+number2


}
// const result = addTwoNumbers(8,9)
 
// console.log(result)  //why undefined

function loginUserMessage(username){
    if(username === undefined){                    //if(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("faf"))
console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1

// }
// console.log(calculateCartPrice(200,400,500))

function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500))

function calculateCartPrice(val1,val2,...num1){
    return num1

}
console.log(calculateCartPrice(200,400,300,450,800,900,500))

const user ={
    username:"shri",
    age:20
}
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}
// handleObject(user)
handleObject({
    username:"shri",
    age:20

})

const myNewArray = [200,300,4000,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))