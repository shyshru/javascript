//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "shriyanshi",
    age:20,
    location:"Seattle",
    email:"shrio@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tueasday"],
   // mySym :"mykey1"
   [mySym]:"mykey1"

}
// console.log(jsUser.email)
// console.log(jsUser["email"]) //square notation
// // console.log(jsUser.mySym) //datatype problem ,it is not being used as symbol
// // console.log(typeof jsUser.mySym)
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])


// Object.freeze(jsUser) //no further changes propogate
// jsUser["email"]="shri@yahoo.com"
// console.log(jsUser)


// adding functions in Object
jsUser.greetings = function(){
    console.log("heyyyyy")
}
console.log(jsUser.greetings())

jsUser.greetingtwo = function(){
    console.log(`hello , ${this.name}`)
}
console.log(jsUser.greetingtwo())
