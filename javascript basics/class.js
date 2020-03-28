function person(name,age){
   this.firstname=name.split(" ")[0];
   this.lastname=name.split(" ")[1];
   number=10;

   this.isadult=function(){
       return age>18;
   }

}

// here this is public and without this is private;

let p = new person("prateek bansal",20);
console.log(p.firstname + " is adult " + p.isadult() );
console.log(p.number); // return udefined as number is private here (without this)