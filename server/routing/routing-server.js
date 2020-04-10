const express=require('express')
const srv  = express()

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

const teacher_route=require('./routes/teacher')
const student_route=require('./routes/student')

srv.use('/teacher',teacher_route)
srv.use('/student',student_route)
srv.use(function(req,res,next){
    res.send("<h2>Page Not Found</h2>")
})

srv.listen(1111)
