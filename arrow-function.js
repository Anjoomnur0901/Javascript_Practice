const display=()=>{
    console.log("Display message")
}
const display2=()=>
    console.log("Display message")//if only one line

//arrow function with map and filter
let students = [
    {
        id:101,
        name:"Anjoom Nur",
        gpa:3.82
    },
    {
        id:102,
        name:"Raisa",
        gpa:3.70
    },
    {
        id:103,
        name:"X",
        gpa:2.70
    }
]

const getStudents = ()=>{
    return students.filter((x)=>x.gpa>3).map((y)=>y.name)
}
console.log(getStudents())
