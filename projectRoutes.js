const express=require('express')
const router=express.Router()
const project=require('../models/project')
const Task = require('../models/Task'); // model for tasks
const mongoose=require('mongoose')
const findAll = require('../services/service')

router.get('/',async(req,res)=>{
    findAll(res,project)
})

// GET /project/:projectId/tasks
router.get('/:projectId/tasks', async (req, res) => {
  const projectId = req.params.projectId;

  console.log("Incoming projectId:", projectId);

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    console.log("Invalid ObjectId format");
    return res.status(400).json({ error: 'Invalid project ID format' });
  }

  try {
    const tasks = await Task.find({ project: projectId });
    console.log("Tasks retrieved:", tasks);

    if (!tasks.length) {
      return res.status(404).json({ message: 'No tasks found for this project.' });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error occurred while fetching tasks:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports=router