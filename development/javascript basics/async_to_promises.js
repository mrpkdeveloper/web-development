// function sometask(callback) {
//     console.log("we are doing some task")
//     setTimeout(function () {
//         callback();
//     }, 100);
// }


// sometask(function () {
//     console.log("we did something")
// })


// //now same thing with promise

// function sometaskpromise() {
//     return new Promise(function (resolve, reject) {
//         console.log("we are doing some task")
//         setTimeout(() => {
//             resolve();
//         }, 100);
//     })
// }

// sometaskpromise().then(function () {               //then is resolve function 
//     console.log("we did something")

// })



//******set timeout function***************
console.log("******set timeout function***************")
function fakedownload(done) {

    setTimeout(() => {
        let downloaded_data = "downloaded data get from net"
        done(downloaded_data)
    }, .00000001);
}

//on calling this function first setimeout to 3000 milisecnds
//then done function is called 
fakedownload(function (data) {
    console.log("we downloaded a file which has this data =====> ")
    console.log(data)
    console.log("/n")
})


//*****promises***************
console.log("******promises***************")

function fakedownloadpromise(condition) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let downloaded_file = "this is downloaded file"
            if (condition) {
                resolve(downloaded_file)
            } else {
                reject(new Error("could not download file"))
            }
        }, 5000);

    })
}

fakedownloadpromise(true)
    .then(function (data) {
        console.log(" downloaded file ==> ")
        console.log(data)
    })
    .catch(function (err) {
        console.log(err)
    })