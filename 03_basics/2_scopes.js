let a =1000
var c=300
if(true){
    var c=30
    let a=10
}
console.log(c)
console.log(a)

function one(){
    const username="shri"

    function two(){
        const website="git"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username = "roxy"
    if(username ==="roxy"){
        const website = "google"
        console.log(website+ username)
    }
    // console.log(website)
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(7))