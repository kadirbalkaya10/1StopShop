// Importing Mongoose library
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining the schema for the apparel collection
const apparelScheme = new Schema({
	category: {
		type: Int,
		required: true,
	},
	product: [
		{
			productId: {
				type: Int,
				required: true,
			},
			product_name: {
				type: String,
				required: true,
			},
			price: {
				type: Int,
				required: true,
			},
			stock: {
				type: Int,
				required: true,
			},
		},
	],
	Tag: [
		{
			tagId: {
				type: Int,
				required: true,
			},
			tag_name: {
				type: String,
			},
		},
	],
});

// Creating a model named "Apparel" based on the userSchema
const Apparel = mongoose.model("Apparel", apparelScheme);

// Exporting the Apparel model
module.exports = Apparel;
