const addNumbers=(x,y,z)=>{
    return x+y+z;
}
let numbers = [1,2,3]
console.log(addNumbers(numbers[0],numbers[1],numbers[2]))
console.log(addNumbers(...numbers))

let numbers1 = [5,6,...numbers]
console.log(numbers1)

//Concat using spread operator
let numbers2 = [9,10,11]
let numbersNew = [...numbers1,...numbers2]
console.log(numbersNew)

//Object concatenation
let p1 = {
    name:"Anjoom Nur",
    age :"24"
}

let p2 = {
    nationality : "Bangladesh",
    occupation:"Student"
}

let p = {...p1,...p2}