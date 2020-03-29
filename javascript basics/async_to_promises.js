function sometask(callback) {
    console.log("we are doing some task")
    setTimeout(function () {
        callback();
    }, 3000);
}


sometask(function () {
    console.log("we did something")
})


//now same thing with promise

function sometaskpromise() {
    return new Promise(function (resolve, reject) {
        console.log("we are doing some task")
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

sometaskpromise().then(function(){               //then is resolve function 
    console.log("we did something")

})