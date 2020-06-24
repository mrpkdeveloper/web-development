class person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
}

let p = new person("harry", 30)
console.log(p)
p() //gives error beacuse pis not a function it behaves like a class 