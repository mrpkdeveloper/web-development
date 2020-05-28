let str = "abcd"                                //proto 3 levels from null
let num = 233                                   //proto 3 levels from null
let bool = true                                 //proto 3 levels from null
let arr = [11, 22, 33, 44, 55]                  //proto 2 levels from null
let obj = { a: 10, b: "sajhga" }                //proto 3 levels from null
let fun = function () { console.log("xyz") }    //proto 3 levels from null
//if x and y are not primitive
//x==y <- what does this means?
//this means they are reffrence to same object in memory

console.log("**********types**********")
console.log(typeof String)  //String is a function
console.log(typeof Number)  //number is a function
console.log(typeof Boolean)  //Boolean is a function
console.log(typeof Array)  //Array is a function
console.log(typeof Object)  //Object is a function
console.log(typeof Function)  //Function is a function
console.log("**********types**********")

console.log("**********proto chain**********")
//_proto_ is a hidden variable and points to that object from which cureent object is inherited
console.log(str.__proto__.__proto__ == obj.__proto__)    //true
console.log(num.__proto__.__proto__ == obj.__proto__)    //true
console.log(bool.__proto__.__proto__ == obj.__proto__)    //true
console.log(arr.__proto__.__proto__ == obj.__proto__)    //true
console.log(fun.__proto__.__proto__ == obj.__proto__)    //true
console.log("**********proto chain**********")

//everything indirectly inherits from the same thing 
//from which object is inhereted from
//i.e in javascript everything is essentially an object

console.log("**********prototypes**********")
//prototype are well defined blueprints from which other things are made
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)
console.log("**********prototypes**********")

// let x = Object.create(Object.prototype)  here x is created on bluprint of Object.prortype
//x._proto_ points to protype of Object

let str2 = "aved"
console.log(str.charAt == str2.charAt) //gives true
//means both charAt are refring to same point
str.charAt = function () { return "x" } //does not make any changes as str does not have char at function
//charat function is in str._proto_

//this works 
str.__proto__.charAt = function () {
    return "x"
}

//**************************classes************************************
console.log("***********classes************")
//no type of class
//here type of person will be function only 
class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    isadult() {                     //we do not write function keyword in class
        return this.age > 18        //this function defines inside person.prototype
    }
}

//p is is an object of function person
let p1 = new person("john", 20)
let p2 = new person("john", 15)
console.log(p1.__proto__ == person.prototype)  //trueF
console.log(p1.__proto__.__proto__ == Object.prototype)  //true
console.log(p1.isadult())//true
console.log(p1.isadult == p2.isadult) //true as both refring to same place


//********inheritance*************************
console.log("********inheritance*************************")
class student extends person {
    constructor(name, age, std) {
        super(name, age)
        this.std = std
    }
}

let s1 = new student("jhonny", 20, 12)
let s2 = new student("bonny", 20, 12)

console.log(s1.__proto__ == student.prototype)//true
console.log(s1.__proto__.__proto__ == person.prototype)//true
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)//true

//actually no relaton b/w student and person 
//relation exist b/w student.prototype and person.prototype