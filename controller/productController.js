const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');

//get-all
async function getProducts(req, res, next) {
	const { page, limit } = req.query;
	try {
		if (page && limit) {
			const products = await Product.find()
				.limit(limit * 1)
				.skip((page - 1) * limit)
				.exec();
			const count = await Product.countDocuments();
			res.status(200).json({ products, totalPages: Math.ceil(count / limit), currentPage: page });
		} else {
			const products = await Product.find();
			res.status(200).json({ products });
		}
	} catch (error) {
		res.status(500).json({
			err: error,
			message: 'internal-server error',
		});
	}
}

async function getSingleProduct(req, res, next) {
	let productId = req.params.id;
	try {
		const product = await Product.findById(productId);
		res.status(200).json({ product: product });
	} catch (err) {
		res.status(500).json({
			err: err,
			message: 'product not found',
		});
	}
}

//add
async function addProduct(req, res, next) {
	let productData = { ...req.body, img: req.file.filename };
	console.log(productData);
	const newProduct = new Product(productData);
	try {
		const response = await newProduct.save();
		res.status(200).json({
			msg: 'product added successfully',
		});
	} catch (error) {
		console.log(error);
		res.status('500').json({
			error: {
				msg: error.message,
			},
		});
	}
}

//add
async function updateProduct(req, res, next) {
	let id = req.params.id;
	let data = req.body;
	console.log(id, data);
	try {
		let updatedProduct = await Product.findOneAndUpdate({ _id: id }, { $set: data });

		res.status(200).json({
			msg: 'product updated successfully',
		});
	} catch (error) {
		res.status('500').json({
			error: {
				msg: error.message,
			},
		});
	}
}

//delete
async function deleteProduct(req, res, next) {
	let id = req.params.id;

	try {
		let { img } = await Product.findById(id);
		await Product.deleteOne({ _id: id });
		if (img) {
			fs.unlink(path.join(__dirname + `../../../client/public/assets/images/${img}`), (err) => {
				if (err) throw err;
				console.log(path.join(__dirname + `../../../client/public/assets/images/${img}`) + ' deleted successfully');
			});
		}
		res.status(200).json({
			msg: 'product deleted successfully',
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
	deleteProduct,
	updateProduct,
	getSingleProduct,
};
