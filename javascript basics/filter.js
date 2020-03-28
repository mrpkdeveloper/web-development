let arr =[1,2,3,4,5,6,7 ];
let arr1 = arr.filter(function(item){
    return item%2===0;
})
//to print even no from array
console.log(arr1)

//example with menu
let menu = ["panner tikka","egg curry","chicken tandoor","garlic bread","onion rings"]

function isveg(item){
    if(item.toLowerCase().indexOf("egg") !==-1) 
    return false;
    if(item.toLowerCase().indexOf("chicken") !==-1) 
    return false;
    return true;
}
let vegmenu=menu.filter(isveg)
console.log("menu :" + menu);
console.log("veg menu : " + vegmenu)

