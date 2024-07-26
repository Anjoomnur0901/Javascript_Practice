let numbers = [10,30,40,50,60]
let [num1, num2, ...z] = numbers
console.log(num1)
console.log(z)


//Swapping using destructure

let a=10, b=20;
[a,b]=[b,a]

//object destructure
const studentsInfo = {
    id:101,
    name:'Anjoom Nur',
    gpa:3.82,
    languages : {
        native:'bangla',
        beginner:'English'
    }
}

const {id,languages} = studentsInfo
console.log(id) // no need to write console.log(studentsInfo.id)
console.log(languages.native)
//destructuring function parameters
const studentInformation=(x)=>{
    console.log(`id:${x.id},Full Name: ${x.fullName}`)
}
const student = {
    id : 101,
    fullName : "Anjoom Nur"
}
studentInformation(student)

//destructured
const studentInformation2=({id, fullName})=>{
    console.log(`id:${id},Full Name: ${fullName}`)
}
studentInformation(student)
