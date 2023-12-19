const marvel = ["thor","ironman","spiderman"]
const dc = ["batman","superman","flash"]

// marvel.push(dc)
// console.log(marvel)

const allHeros = marvel.concat(dc)
console.log(allHeros)

const all_new_heros = [...marvel,...dc]  //spread operator
console.log(all_new_heros)


const myArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const myArr2 = myArr.flat(Infinity) //infinit => depth
console.log(myArr2)

console.log(Array.isArray("shr"))
console.log(Array.from("shr"))
console.log(Array.from({name:"shri"})) //confused from keys or values

let score1 = 900
let score2 = 890
console.log(Array.of(score1,score2))