let obj = {
    a:10,
    b:20,
    c:true,
    d:'hello'
}
// this is how an object is made inside javascript 
console.log(obj.c);
obj.e = 'world';
// we can add more fields directly like this 
console.log(obj.e);
delete obj.b
// to delete property of object 