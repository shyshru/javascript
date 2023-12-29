const myNums =[1,2,3,4]

const myTotal = myNums.reduce(function(acc,curval){
    console.log(`accumulator is ${acc} and current value is ${curval}`)
    return acc+curval
},3)
console.log(myTotal)
const myTotal1 = myNums.reduce((acc,cur) => acc+cur,0)
console.log(myTotal1)

const shoppingCart = [
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"python",
        price:299

    },
    {
        itemName:"mobiledev",
        price:1299

    }
]
const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay)