const user = {
    username: "shri",
    price: 999 ,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        //console.log(this)

    }

}
//user.welcomeMessage()
// user.username="manya"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username= " shhh "
//     //console.log(this)
//     console.log(this.username) //this cannot be used in function only in object
// }
//chai()

// const chai =function(){
//     let username= " shhh "
//     console.log(this)
//     console.log(this.username) //still undefined

// }

const chai = () => {
    let username= " shhh "
    console.log(this)
    console.log(this.username) //still undefined
    

}

chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => (num1+num2)


console.log(addTwo(8,9))


const hey =() =>({name:"tanya"})
console.log(hey())   //to return object you have to wrap in paRANTHESES


// const myArray = [4,6,4,5]
// console.log(myArray.forEach(() =>{}))