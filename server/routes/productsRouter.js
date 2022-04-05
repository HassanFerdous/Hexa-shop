const express = require('express');
const {
	getProducts,
	addProduct,
	deleteProduct,
	updateProduct,
	getSingleProduct,
} = require('../controller/productController');
const { upload } = require('../middleware/singleUpload');

const router = express.Router();

//get all products
router.get('/', getProducts);

//get single-product
router.get('/:id', getSingleProduct);

//add products
router.post('/', upload.single('img'), addProduct);

//update products
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);

module.exports = router;
