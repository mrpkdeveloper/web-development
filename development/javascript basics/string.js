let a = "prateek"
let b = "bansal"

//these ${} are templates
let c = `${a} ${b}`    //this is backticks and can use when u want to use "" and '' both in a string
console.log(c)
console.log(c.length)


let string = "this-is-a-string-is"
//indexof can also be used to search a string (if ans is -1 then string is not present)
console.log(string.indexOf("is"))    //gives position of is inside this
console.log(string.lastIndexOf("is"))

//substring
console.log(string.slice(0, 6))   //in slice we can put negative values as well
console.log(string.slice(-6, -4))   //from back

// prints substrings from index 1 of 4length
console.log(string.substr(1, 4))
console.log(string.substr(-5, 4))


