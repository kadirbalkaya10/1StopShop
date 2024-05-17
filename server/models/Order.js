const mongoose = require('mongoose');

const { Schema } = mongoose;

//creates order schema to keep track of user orders
const orderSchema = new Schema({
    purchasedDate: {
        type: Date,
        default: Date.now
    },
    //takes their products into account to be added to the order
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        }
    ]

});

//creates a mongoose model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;