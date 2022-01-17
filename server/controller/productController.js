const Product = require('../models/productModel');

async function getProducts(req, res, next) {
	const products = await Product.find({});
	res.status(200).json({ products });
}

async function addProduct(req, res, next) {
	const newProduct = Product(req.body);
	try {
		const response = await newProduct.save();
		res.status(200).json({
			msg: 'product added successfully',
		});
	} catch (error) {
		res.status('5000').json({
			error: {
				msg: error.message,
			},
		});
	}
}

module.exports = {
	getProducts,
	addProduct,
};
