// function greater() {
//     console.log("hello world");
// }

// // greater(); 

// let hello = greater;
// // hello(); 

// // we assign hello as greater function


// function first_name(fullname) {
//     return fullname.split(" ")[0];
// }

// function greeter(findname, fullname) {
//     let first_name = findname(fullname);
//     console.log('hello ' + first_name);
// }

// // greeter(first_name,"prateek bansal"); 


// function creategreeter(name) {
//     let fisrtname = name.split(" ")[0];
//     function greeter() {
//         console.log("hello " + fisrtname);
//     }
//     return greeter;
// }

// let prateek = creategreeter("prateek bansal");
// // prateek(); 

// function createcounter(initval, delta) {
//     let val = initval;
//     function counter() {
//         val = val + delta;
//         console.log(val);
//     }
//     return counter;
// }

// let twocounter = createcounter(2, 2);
// twocounter();
// twocounter();


// function count(initval, delta) {
//     let val = initval

//     let c = {
//         inc: function () {
//             val += delta
//         },
//         dec: function () {
//             val -= delta
//         },

//         show: function () {
//             console.log(val)
//         }


//     }
//     return c

// }

// let a = count(50, 5)
// a.show()

//new webinar content
function outer(arg1) {
    let var1 = 10
    let x = 20
    function inner(arg2) {
        let var2 = 20
        let x = 15
        console.log(arg1, var1, arg2, var2, x)
    }
    return inner
}


//here type of x is a function because outer returns inner function and thus makes 
//x a function
let x = outer("Hello")
x("World") //this line calls inner function

//CLOSURE FUNCTIONS 
//scope of parent function ar kept by child functions till it is present in memory