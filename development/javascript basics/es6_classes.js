class person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
}

class student extends person {
    constructor(name, age, school) {
        //super calls the parent class constructor
        super(name, age) //we can use this only if we use super in extended class
        this.school = school

    }
}

let p = new person("harry", 30)
console.log(p)
// console.log(typeof (p)) //object
// p() //gives error beacuse pis not a function it behaves like a class
let s = new student("ron", 20, "hogwarts")
console.log(s)
