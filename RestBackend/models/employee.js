const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    
    email:String,
    password:String
})

const EmployeeModel = mongoose.model("Employees",employeeSchema)
module.exports = EmployeeModel