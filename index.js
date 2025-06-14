const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Route registration
app.use('/user', userRoutes); //for postman call
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/taskDB').then(()=> 
{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

// Error handling middleware (global)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at on :${port}`);
});
