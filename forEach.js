var numbers = [10,20,30,40]

const myFunction=(x)=>{
    console.log(x)
}
numbers.forEach(myFunction)


//concised way

numbers.forEach((y)=>{
    console.log(y)
})

//example
let squaredNum=[];
numbers.forEach((z)=>{
   squaredNum.push(z*z)
})
console.log(squaredNum)

//example
numbers.forEach((x,i,arr)=>{
    arr[i]=x+5;
})
console.log(numbers)