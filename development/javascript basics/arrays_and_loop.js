let arr1 = [1, 2, 3, 4]

//hetrogeneous array
let arr2 = [1, "hello", [1, 2, 3]]

//different types of loops

//for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

console.log(typeof (arr2[2]))

//for-of loop
for (let val of arr2) {
    console.log(val)
}

console.log("  ")

//for-in loop
for (let index in arr2) {
    console.log(arr2[index])
}