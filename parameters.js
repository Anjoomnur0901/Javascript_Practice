//Default and Rest Parameters
"use strict"
const message=(text="Default text")=>{
    console.log(`${text}`)
};
message();
message("Learning Es6");

const sum = (x,y)=>{
    console.log(`${x} and ${y} sums ${x+y} `)
};
sum(10,20)

//Rest parameter
const sum2 = (x,y,...z)=>{
    console.log(`${x},${y},${z}`)
};
sum2(10,20,30,40,50)