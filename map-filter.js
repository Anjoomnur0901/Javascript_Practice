let numbers = [2,3,4,5]
let squaredNumbers = []
numbers.forEach((x)=>{
    squaredNumbers.push(x*x)
})
console.log(squaredNumbers)

//same function using map-returns array

let squaredNum = numbers.map((x)=>{
    return x*x
})
console.log(squaredNum)

//Conditional Filtering
let num = [22,3,31,4,35,15,26,27]
let findXGreaterthanTen = num.filter((x)=>{
    return x>10
})
console.log(findXGreaterthanTen)