const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		desc: {
			type: String,
			require: true,
		},
		img: {
			type: String,
		},
		sizes: {
			type: Array,
		},
		tags: {
			type: [],
		},
		categories: {
			type: Array,
		},
		inStock: {
			type: Boolean,
			default: true,
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
// 	"tags": "lorem, ipsum",
//     "inStock": "true"
// }
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
