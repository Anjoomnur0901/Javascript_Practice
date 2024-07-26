//how to create a promise- pending, resolve, reject
console.log("hello")
const promise1 = new Promise((resolve, reject)=>{
    /*let completedPromise = true;
    if(completedPromise){
        resolve('completed promise 1.')// can send object etc
    }
    else{
        reject(new Error("not completed promise 1"))
    }*/
        setTimeout(()=>{
            resolve('completed promise 1.')
           },2000)
})
const promise2 = new Promise((resolve, reject)=>{
    /*let completedPromise = true;
    if(completedPromise){

        resolve('completed promise 2.')// can send object etc
    }
    else{
        reject(new Error("not completed promise 2"))
    }*/
   setTimeout(()=>{
    resolve('completed promise 2.')
   },1000)
})
promise1.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
promise2.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
console.log("end")
//Promise chaining
Promise.all([promise1,promise2]).then(([res1,res2])=>console.log(res1))

//Promise race takes promises and whichever it can resolve first will be shown in the output
Promise.race([promise1,promise2]).then((res)=> console.log(res));// promise 2 will be resolved first



//
const taskOne = () =>{
    return new Promise((resolve, reject)=>{
        resolve('task 1 is completed')
    })
}
const taskTwo = () =>{
    return new Promise((resolve, reject)=>{
        resolve('task 2 is completed')
    })
}
const taskThree = () =>{
    return new Promise((resolve, reject)=>{
        reject('task 3 is not completed')
    })
}
const taskFour = () =>{
    return new Promise((resolve, reject)=>{
        resolve('task 4 is completed')
    })
}
//sometimes we dont need to create the promise. when fetching data we will get re or rej
taskOne()
    .then((res)=> console.log(res))
    .then(taskTwo)
    .then((res)=> console.log(res))
    .then(taskThree)
    .then((res)=> console.log(res))
    .then(taskFour)
    .then((res)=> console.log(res))
    .catch(err=>console.log(err)) //one catch is enough


//The above work can be represented in a synchronised way using async await
const callAllTasks= async ()=>{
    try{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);}
    catch(e){
        console.log(e)
    }
}
callAllTasks()