const fs = require('fs')
function readdata() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/mytext.txt', function (err, data) {
            if (err) throw err
            s = data.toString().split("\r\n")
            resolve(s)
            // console.log(s)
        })

    })

}

readdata()
    .then((a) => {
        var dict = {}
        for (let j = 0; j < a.length; j++) {
            var c = 0
            for (let i = 0; i < a.length; i++) {
                if (a[j] == a[i]) {
                    c++
                }
            }
            dict[a[j]] = c
        }
        let str = JSON.stringify(dict)
        let finalstring = str.slice(1, str.length - 1).split(",").join("\n")
        console.log(finalstring)
        fs.writeFile(__dirname + "/finaltext.txt", finalstring, function (err) {
            if (err) throw err
            console.log("file was written")
        })
    })


// let a = "a,b,c"
// let b = a.split(",")
// console.log(b)