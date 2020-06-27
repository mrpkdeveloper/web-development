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
        for (let j = 0; j < a.length; j++) {
            var c = 0;
            for (let i = j; i < a.length; i++) {
                if (a[j] == a[i]) {
                    c++
                }
            }
            console.log(a[j] + " count : " + c)
        }


    })







// let a = "a,b,c"
// let b = a.split(",")
// console.log(b)