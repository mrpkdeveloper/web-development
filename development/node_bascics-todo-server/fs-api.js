const fs = require('fs')

//write in file filename , text
fs.writeFileSync('helloworld.txt', 'hello codders')
const data = fs.readFileSync('helloworld.txt')
//convert data to string using to string function
console.log(data.toString())