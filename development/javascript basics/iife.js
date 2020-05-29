//iife - imediately invoked function expression


//***normal***********
function sayhello() {
    console.log("say hello")
}

//function call
//sayhello()

//*****iifee**********
//no function name and no need to call it
(function () {
    console.log("say hello");
})();

//uses of ifee********************

//normal
function domath() {
    console.log(" 3^4 = " + Math.pow(3, 4))
    console.log(" 4^3 = " + Math.pow(4, 3))
    console.log(" root of 2 = " + Math.sqrt(2))
    console.log(" sin(10) = " + Math.sin(10))
}


//using iffee***********
//more simplistic and short
(function (l, p, q, r) {
    l(" 3^4 = " + p(3, 4))
    l(" 4^3 = " + p(4, 3))
    l(" root of 2 = " + q(2))
    l(" sin(10) = " + r(10))
})(console.log, Math.pow, Math.sqrt, Math.sin)

//awsome good example for closure 
for (var i = 0; i < 10; i++) {

    setTimeout(() => {
        console.log(i)
    }, 1000);

}          //print 10 every times (closure scope)

// solve this problem by using iifee
for (var i = 0; i < 10; i++) {

    (function (j) {
        setTimeout(() => {
            console.log(j)
        }, 1000);
    })(i)
}

//solve using closure
for (let i = 0; i < 10; i++) {

    setTimeout(() => {
        console.log(i)
    }, 1000);
}