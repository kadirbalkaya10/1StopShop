// Importing Mongoose library
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Destructuring Schema from mongoose

const { Schema } = mongoose;
// Defining the schema for the user collection
const userSchema = new Schema({
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
  //add products
  orders: [{
		type: Schema.Types.ObjectId,
		ref: 'Order',
	}],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// Creating a model named "User" based on the userSchema
const User = mongoose.model("User", userSchema);

// Exporting the User model
module.exports = User;
