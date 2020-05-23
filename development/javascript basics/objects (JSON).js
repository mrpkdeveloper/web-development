let obj = {
    a: 10,
    b: 20,
    c: true,
    d: 'hello'
}
// this is how an object is made inside javascript 
console.log(obj.c);
obj.e = 'world';
// we can add more fields directly like this 
console.log(obj.e);
delete obj.b
// to delete property of object 

//this type of objects are called javascript object notation (JSON) made without creating classes
var bird = {
    x: 100,
    y: 50,
    color: "blue",
    eggs: [1, 2, 3, 4],

    fly: function () {
        console.log("bird is flying ", this.x, this.y)
    }
}

bird.fly()