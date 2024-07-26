//hoisting 
//in javascript we can use variables before declaring them
n=20;
console.log(n);
var n;

//if we use let or const it is not possible
m=20;
console.log(m);
let m;//will throw error

//Strict Mode
"use strict"
x=20
console.log(`x=${x}`)//strict mode won't allow this
