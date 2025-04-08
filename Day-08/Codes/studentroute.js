const express = require('express')
const router = express.Router()
const studentService=require('./studentservice')
/*
router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if(results){
        res.status(200).json(results)
    }
    else
    {
        res.status(404).send("sorry, No Data Found !")
    }
    
})
*/
router.get('/', (req, res) => {
    const results = studentService.getStudent(); // ← fixed here
    if (results && results.length > 0) {
        res.status(200).json(results);
    } else {
        res.status(404).send("sorry, No Data Found !");
    }
})


router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getstudents(id)
    if(results){
        res.status(200).json(results)
    }
    else
    {
        res.status(404).send("sorry, No Data Found !")
    }
    
})

router.get('/gender/:gen',(req,res)=>{
    const gender = req.params.gen=='m'?'male':'female'
    const results = studentService.getByGender(gender)
    if(results){
        res.status(200).json(results)
    }
    else
    {
        res.status(404).send("sorry, No Data Found !")
    }
    
})

router.get('/course/:course', (req, res) => {
    const course = req.params.course;
    const results = studentService.getByCourse(course);
    if (results.length > 0) {
        res.status(200).json(results);
    } else {
        res.status(404).send("Sorry, No Data Found!");
    }
})



module.exports=router