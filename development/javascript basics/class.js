function person(name, age) {
    this.firstname = name.split(" ")[0];
    this.lastname = name.split(" ")[1];
    number = 10;

    this.isadult = function () {
        return age > 18;
    }

}

// here this is public and without this is private;

let p = new person("prateek bansal", 20);  // this is an object p made thru class like function
console.log(p.firstname + " is adult " + p.isadult());
console.log(p.number); // return udefined as number is private here (without this)

//another way to create an object (JSON form)
let a = {
    firstname: "abcd",
    lastname: "efgh",
    number: 10,

    isadult: function () {
        return age > 18;
    }
}
console.log(a)

//another way to create object is by using classes
// class keyword was introduced in ECMAscript 2015
//this is hoisted form (first declare then use)
class fruitclass {
    constructor(color, taste) {
        this.fruitcolor = color
        this.fruittaste = taste
    }
}

let mango = new fruitclass("yellow", "sweet")
console.log(mango)

//non hoisted form
let fruitclass2 = class {
    constructor(color, taste) {
        this.fruitcolor = color
        this.fruittaste = taste
    }
}

