const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    uname:String,    
    email:String,
    password:String,
    address:String
})

const EmployeeModel = mongoose.model("Employees",employeeSchema)
module.exports = EmployeeModel