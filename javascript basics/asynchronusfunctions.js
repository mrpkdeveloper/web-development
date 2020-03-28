// function task(done){
// console.log("we are doing task")
// done();
// }

// task(function(){
//      console.log("task was done")
// })

// console.log("we did a task ")
// console.log(" ")

// the above is syncronus functions
//now asynchronus function

function task(done){
    console.log("we are doing task")
    setTimeout(done,1000)
    }
    
    task(function(){
         console.log("task was done")
    })
    
    console.log("we did a task")


    //advanced asynchronus
    let a = false;

    setTimeout(function(){
        a=true
    },1000)

    while(!a){
        console.log(1)
    }