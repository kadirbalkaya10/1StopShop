// Importing Mongoose library
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining the schema for the apparel collection
const apparelScheme = new Schema({
	category: {
		type: Number,
		required: true,
        unique: true,
	},
	product: [
		{
			productId: {
				type: Number,
				required: true,
			},
			product_name: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			stock: {
				type: Number,
				required: true,
			},
            image: {
                type: String,
              },
		},
	],
	Tag: [
		{
			tagId: {
				type: Number,
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
