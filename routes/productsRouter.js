const express = require('express');
const {
	getProducts,
	addProduct,
	deleteProduct,
	updateProduct,
	getSingleProduct,
} = require('../controller/productController');
const { verifyTokenAdmin } = require('../middleware/auth');
const { upload } = require('../middleware/singleUpload');

const router = express.Router();

//get all products
router.get('/', getProducts);

//get single-product
router.get('/:id', getSingleProduct);

//add products
router.post('/new', verifyTokenAdmin, upload.single('img'), addProduct);

//update products
router.put('/:id', verifyTokenAdmin, updateProduct);

//delete product
router.delete('/:id', verifyTokenAdmin, deleteProduct);

module.exports = router;
