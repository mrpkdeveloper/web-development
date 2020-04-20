const route = require('express').Router()
//this route in on "/api/"path

const db = require('../db')

route.get('/',function(req,res){
    //send all the persons as an array here
    db.getallperson()
    .then((persons)=>res.send(persons))
    .catch((err)=>res.send({error: err}))

})
route.post('/',function(req,res){
   //add the new persons   
   db.addpersons(req.body.name,req.body.age,req.body.city)
   .then(()=>res.redirect('/api/'))
   .catch((err)=>res.send({error: err}))


})

exports = module.exports={
    route
}