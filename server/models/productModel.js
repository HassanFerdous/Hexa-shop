const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		status: {
			type: Boolean,
			default: true,
		},

		inStock: {
			type: Number,
			default: 1,
		},
	},
	{
		timeStamp: true,
	}
);
// {
//     "title": "Men's t-short",
//     "price": "150",
//     "desc": "lorem ipsum dollar sit",
// 	"cat": "men",
// 	"sizes": [40, 42, 45]
// 	"tags": ["lorem, ipsum"],
//     "inStock": "120"
// }
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
