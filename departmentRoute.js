const express=require('express')
const router=express.Router()
const Department=require('../models/Department')
const Employee=require('../models/Employee'); 
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Department.find() 
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

//1.
router.get('/:id/emp',async(req,res)=>{
    try{
        const id=req.params.id
    const results = await Department.findById(id).populate("employeeID");

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
router.post('/Department', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Department inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//2.
// Get a department by ID along with its employees
router.get('/:did/employees', async (req, res) => {
    const did = req.params.did;
    try {
        const department = await Department.findById(did)
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        // Fetch employees linked to this department
        const employees = await Employee.find({ departmentID: did });

        res.status(200).json({department,employees});
    } catch (error) {
        console.error("Error fetching department with employees:", error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

//3. select a field which want to display
router.get('/:id/emp',async(req,res)=>{
    try{
        const id=req.params.id
  const results = await Department.findById(id).select("name").populate("employeeID");
    
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
router.post('/Department', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Department inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//////////////////
router.get('/ex/:did', async (req, res) => {
    try {
        const did = req.params.did;

        // Find employees in the department and populate department details
        const employees = await Employee.find({ departmentID: did }).populate("departmentID");

        if (employees.length === 0) {
            return res.status(404).send("No employees found for this department.");
        }

        // Get employee count
        const employeeCount = employees.length;

        // Department details (from first employee, since all have same department)
        const department = employees[0].departmentID;

        // Response
        res.status(200).json({
            departmentDetails: department,
            employeeCount: employeeCount,
            employees: employees
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.get('/emp/:did',async(req,res)=>{
try{
    const {did}=req.params
    const results=await Employee.find(
        {departmentID:did},
        {name:1,departmentID:1}).populate("departmentID").sort({name:-1})
    
        //manipulate the result
        const filterResult=results.map(emp=>({
            employee_id:emp._id,
            employee_name:emp.name,
            department_name:emp.departmentID.name
        }))
        if(results){
            res.status(200).json(filterResult)
        }else{
            res.status(404).send("Sorry no data found")
        }}
    
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }

})
//find how many employees are working in a department


//show the employee count along with each department details


router.get('/empcount',async(req,res)=>{
    try{
        const results=await Department.aggregate([
           {
            $lookup:{
                from:"employees",   // Use the actual collection name in lowercase plural
                localField:"_id",
                foreignField:"departmentID",  // // match exactly the field name in Employee schema
                as:"emps"

            }
           } ,
           {
            $project:{
               name:1,
               location:1,
               number_of_employee:{$size:"$emps"}
            }
           }
        ])
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

module.exports=router