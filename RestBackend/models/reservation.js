const mongoose = require('mongoose');

const BookYourSeat = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  date: Date,
  time:String,
  persons: Number,
});

const BookTable = mongoose.model("BookTableData",BookYourSeat)
module.exports = BookTable