function hellosayer(times, name) {
    let count = 0
    let loopid = setInterval(() => {
        count++
        console.log("hello " + name)
        if (count == times) {
            clearInterval(loopid)
        }


    }, 1000)

}

// hellosayer(3, "prateek")
// hellosayer(2, "arnav")
//so basically when prateek prints it waits for 1
// sec and in that time other call runs and print arnav
//these two calls are not running parallely



//concurency using promises
// console.log("***********concurency using promises*************")
function hellosayer2(times, name) {
    return new Promise((resolve, reject) => {
        let count = 0
        let loopid = setInterval(() => {
            count++
            console.log("hello " + name)
            if (count == times) {
                clearInterval(loopid)
                resolve()
            }


        }, 1000)
    })


}

//concurently
// hellosayer2(2, "arnav")
// .then(hellosayer2(2, "prateek"))
// .then(hellosayer2(2, "varun"))

//sequentially
hellosayer2(2, "arnav")
    .then(() => hellosayer2(2, "prateek"))
    .then(() => hellosayer2(2, "varun"))