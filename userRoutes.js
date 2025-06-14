const express=require('express')
const router=express.Router()
const user=require('../models/User')
const findAll = require('../services/service')

router.get('/',async(req,res)=>{
    findAll(res,user)
})

module.exports=router