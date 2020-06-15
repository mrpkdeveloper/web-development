function person(name, age) {
    this.name = name
    this.age = age
    return 10

}

let p = person("harry potter", 10)
console.log(p)
console.log(name)
console.log(age)

//new creates an object of function
let a = new person("harry potter", 10)
console.log(a)
console.log(a.name)                