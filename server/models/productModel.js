const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	price: {
		type: String,
		require: true,
	},
	desc: {
		type: String,
		require: true,
	},
	img: {
		type: String,
	},
	tags: {
		type: [],
	},
	status: {
		type: String,
		enum: ['active', 'sold-out'],
		default: 'active',
	},
});
// {
//     "title": "Men's t-short",
//     "price": "150",
//     "desc": "lorem ipsum dollar sit",
//     "status": "active"
// }
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
