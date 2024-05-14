// Import the Mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect(
  // Use the MongoDB URI specified in the environment variable or default to a local MongoDB instance
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/onestopshopDB"
);

//Export db connection
module.exports = mongoose.connection;
