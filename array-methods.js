// find(callback, value) return the value of the first element that pass certain condition
let numbers = [5,55,14,5,78]
let findFirstEvenNumber = numbers.find(x=>x%2===0);
console.log(findFirstEvenNumber)

//findIndex(callback, value) return the index of the first element that pass certain condition

let findFirstEvenNumberIndex = numbers.findIndex(x=>x%2===0);
console.log(findFirstEvenNumberIndex)

//working with objects
const students = [
    {
        id:101,
        gpa:3.01
    },
    {
        id:102,
        gpa:3.40
    },
    {
        id:103,
        gpa:4.2
    },
    {
        id:105,
        gpa:4.0
    }

]
console.log(students.find(x=>x.gpa>4.0))
console.log(students.findIndex(x=>x.gpa>4.0))