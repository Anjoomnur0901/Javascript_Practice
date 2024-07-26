const studentInfo1=(name, age)=>{
    return {
        name,
        age
    }
}
console.log(studentInfo1("Anjoom",29));

//Concise Method -> function inside object
let message = {
    messageBody(){
        return `Hi, I am object function`
    }
}
console.log(message.messageBody())

let message2 = {
    'message body'(){
        return `Hi, I am object function`
    }
}
console.log(message2['message body'])