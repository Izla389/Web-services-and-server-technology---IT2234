const mongoose=require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String,require:true},
    degreeID:{
        type:String,
        require:true,
        ref:'degrees' //not a model name collection name 
    }
})
    

const Student=mongoose.model('students',studentSchema)
const studentDetails= new Student({
    _id:'2021ICT109',
    name:'Samra',
    date_of_birth:'05-12-2002',
    gender:'Female',
    degreeID:'FAS2000ICT'
       
})
studentDetails.save()

module.exports=Student