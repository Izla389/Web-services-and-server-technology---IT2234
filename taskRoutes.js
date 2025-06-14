const express=require('express')
const router=express.Router()
const task= require('../models/Task')
const mongoose=require('mongoose')
const findAll = require('../services/service')

router.get('/',async(req,res)=>{
    findAll(res,task)
})



module.exports=router