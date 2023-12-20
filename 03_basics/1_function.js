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