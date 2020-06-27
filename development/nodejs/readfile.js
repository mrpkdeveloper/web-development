const fs = require('fs')
function readdata() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/mytext.txt', function (err, data) {
            if (err) throw err
            s = data.toString().split(",")
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

        console.log(dict)
    })







// let a = "a,b,c"
// let b = a.split(",")
// console.log(b)