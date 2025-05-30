const express=require('express')
const router=express.Router()
const Employee=require('../models/Employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Employee.find() 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/Employee', async (req, res) => {
  try {
    const result = await Employee.insertMany(req.body);
    res.status(201).json({ message: 'Employee inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//use projection

router.get('/name',async(req,res)=>{
    try{
        const results=await Employee.find().select("name") 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})


router.get('/procount',async(req,res)=>{
    try{
        const results=await Employee.find()
        const newResult=results.map(emp=>({
            id:emp._id,
            name:emp.name,
            number_of_project:emp.projects.length
        }))
        if(results){
            res.status(200).json(newResult)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

module.exports=router