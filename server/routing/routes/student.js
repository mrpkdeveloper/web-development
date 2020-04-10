const route = require('express').Router()

let students=[
    {name:'rahul',college:'gtbit',year:2},
    {name:'prateek',college:'gtbit',year:4},
    {name:'varun',college:'gtbit',year:3},
    {name:'tarun',college:'gtbit',year:1}
]
route.get('/',function(req,res,next){
    res.send(students)
})

route.post('/',(req,res)=>{
     students.push(
         {
             name:req.body.name,
             college:req.body.college,
             year:req.body.year
         }
     )
     res.send(students)
})

route.get('/:id',function(req,res,next){
    res.send(students[req.params.id])
})

module.exports=route