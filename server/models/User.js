// Importing Mongoose library
const mongoose = require("mongoose");

// Destructuring Schema from mongoose

const { Schema } = mongoose;
// Defining the schema for the user collection
const userScheme = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});
// Creating a model named "User" based on the userSchema
const User = mongoose.model("User", userScheme, 'User');

// Exporting the User model
module.exports = User;
