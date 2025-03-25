const express = require('express');
const app = express();
const port = 3001;
//array of student JSON details
let students = [
    {regno:'2021ict01', name:"meena", gender:'Female', age:24, course:'IT'},
    {regno:'2021ict54', name:"Jhon", gender:'male', age:22, course:'AMC'},
    {regno:'2021ict25', name:"Raj", gender:'male', age:28, course:'IT'},
    {regno:'2021ict31', name:"Amal", gender:'male', age:26, course:'IT'},
    {regno:'2021ict05', name:"Rani", gender:'Female', age:21, course:'IT'},
];

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id = req.params.id 
    //const result = students.map((student)=>student.id == id);
    const result = students.find(student=>student.regno == id);
    res.send(result);
});


app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
})