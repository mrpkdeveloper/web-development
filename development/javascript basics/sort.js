let arr = [1,7,2,5,10,6,27,14,35,3,26];
console.log(arr.sort());
// this is lexicographical sort

function compare(a,b){
    return a-b;
}

function compare2(a,b){
    return (a%10)-(b%10);
}

let arr1=arr.sort(compare);
console.log(arr1);
// this is mathematical sort

let arr2=arr.sort(compare2);
console.log(arr2);
//this is units sort
