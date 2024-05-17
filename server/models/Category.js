// Importing Mongoose library
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

//makes schema for all of the categories such as tops, bottoms, and shoes
const categorySchema = new Schema({
    name: {
        type: String,
       required: true,
        trim: true,
    }
})

const Category = mongoose.model('Category', categorySchema, 'Category');

module.exports = Category;