const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema( {
    userId: String,
	productId: String,
	amount: 0,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)
