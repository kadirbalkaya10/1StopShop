// Importing Mongoose library
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
       required: true,
        trim: true,
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;