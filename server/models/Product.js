// Importing Mongoose library
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining the schema for the product collection
const productSchema = new Schema({
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},

	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		min: 0.99,
		required: true,
	},
	image: {
		type: String,
	},
	quantity: {
		type: Number,
		min: 0,
		default: 0,
	},
});

// Creating a model named "Apparel" based on the userSchema
const Product = mongoose.model('Product', productSchema, 'Product');

// Exporting the Apparel model
module.exports = Product;
