//const tinderUser = new Object()
const  tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUsr={
    email:"sam@yahoo.com",
    fullname: {
        userFullname:{
            firstname:"samuel",
            lastname: "jackson"

        }
    }
}

console.log(regularUsr.fullname)
console.log(regularUsr.fullname.userFullname.firstname)
//console.log(regularUsr.fullname?.userFullname.firstname)

const obj1={1:"a" , 2:"b"}
const obj2={3:"c" ,4:"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)


const users = [
    {
        id:1,
        email:"hg@gmail.com"
    },

    {   id:2,
        email:"sg@gmail.com"

    },

    {  id:3,
        email:"mg@gmail.com"

    }
]
console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser)) //array datatype
console.log(Object.values(tinderUser)) //array datatype
console.log(Object.entries(tinderUser)) //array datatype

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
//go to console type obj check its proto function


const course = {
    coursename : "js",
    price : 300,
    courseInstructor : "hitesh"
}
// course.courseinstructor
const {courseInstructor: instructor} = course //destructuring oobject
console.log(instructor)

// const navbar=  ({company}) =>{

// }
// navbar(company = "hitesh")
// {
//     "name" : "shriyanshi",
//     "course" : "chaijss",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]
//api json formatter