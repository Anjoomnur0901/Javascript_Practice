//for-of and for-in loop

//array, String, list
const names = ["A","B","C"]
for(let name of names){
    console.log(name)
}

// to iterate over objects we use for in
let students = {
    ID :101,
    name:'Anisul Islam',
    cgpa:3.82
}

for(let x in students){
    console.log(`${x} :${students[x]} `)//key and value
}

