function greater (){
    console.log("hello world");
}

// greater(); 

let hello = greater;
// hello(); 

// we assign hello as greater function


function first_name(fullname){
return fullname.split(" ")[0];
}

function greeter(findname,fullname){
    let first_name=findname(fullname);
    console.log('hello ' + first_name);
}

// greeter(first_name,"prateek bansal"); 







function creategreeter(name){
    let fisrtname=name.split(" ")[0];  
    function greeter(){
        console.log("hello " + fisrtname);
    }
    return greeter; 
}

let prateek = creategreeter("prateek bansal");
// prateek(); 






function createcounter(initval,delta){
    let val=initval;
    function counter(){
        val=val+delta;
        console.log(val);
    }
    return counter;
}

let twocounter = createcounter(2,2);
twocounter();
twocounter();


function count(initval,delta){
    let val=initval

    let c = {
       inc: function (){
           val+=delta
       },
       dec : function (){
        val-=delta
       },

       show: function (){
        console.log(val)
       }


    }
    return c

}

let a =count(50,5)
a.show()