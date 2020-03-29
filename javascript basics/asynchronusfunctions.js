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

// function task(done){
//     console.log("we are doing task")
//     setTimeout(done,1000)
//     }

//     task(function(){
//          console.log("task was done")
//     })

//     console.log("we did a task")


//advanced asynchronus
// let a = false;

// setTimeout(function(){
//     a=true
// },1000)                                         //these line of code is infinite loop

// while(!a){
//     console.log(1)
// }


//example of asyncronus function

function downloadfile(url, downloaded) {
    //fake download function

    console.log("downloading file : " + url);

    setTimeout(function () {
        let filepath = "c:\\windows\\xyz.txt"
        console.log("file was downloaded to :" + filepath)
        downloaded(filepath)
    }, 3000)

}

function resizefile(filepath, resied) {


    console.log("we are resizing file : " + filepath);
    setTimeout(function () {
        let newpath = filepath.split(".")[0] + "-resized." + filepath.split(".")[1];
        resied(newpath)
    }, 3000);

}


downloadfile("http://google.com/logo.png", function (path) {
    resizefile(path, function (path) {
        console.log("resized file is at :" + path)
    })
})