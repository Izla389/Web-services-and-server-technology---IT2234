const mongoose=require('mongoose')
const etfSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    employeeID: { type: Number, ref: 'Employee', unique: true },
    contribution: { type: Number, required: true }
});

const Etf = mongoose.model('etf', etfSchema);
/*
const etfs = [
    { _id: "E1", employeeID: 1, contribution: 5000 },
    { _id: "E2", employeeID: 2, contribution: 4500 },
    { _id: "E3", employeeID: 3, contribution: 5500 },
    { _id: "E4", employeeID: 4, contribution: 6000 },
    { _id: "E5", employeeID: 5, contribution: 5200 }
];

Etf.insertMany(etfs);

*/

module.exports=Etf