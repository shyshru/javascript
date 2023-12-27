//for of

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for(const num of arr ){
//     console.log(num)

// }
const greetings = "hello world"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}

//Maps
const map= new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set('FR',"France")
// console.log(map)

// 
for(const [key,value] of map){
    console.log(key,"->",value)
}


const myObject={
    'game1':'NFS',
    'game2':'sm'

}

// for(const[key,value] of myObject){
//     console.log(key,'->','value')
// } not iterable
const myObject1={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myObject1){
    // console.log(key)
    // console.log(myObject1[key])
    console.log(`${key} shortcut is for ${myObject1[key]}`)
   
    
}
const pr=["1","2","3","4"]
for(const key in pr){
    console.log(pr[key])
}
coding=["js","ruby","python","c","cpp","rust"]

// coding.forEach( function (val) {
//     console.log(val)
// });

// coding.forEach( (item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })



const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {

    },
    {

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
    
})
