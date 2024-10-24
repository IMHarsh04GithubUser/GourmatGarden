const mongoose = require('mongoose');
const AddAdmin = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String, // Added image field
});

const AddCategory = mongoose.model('AddCategory', AddAdmin);

module.exports = AddCategory;