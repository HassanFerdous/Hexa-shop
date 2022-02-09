const express = require('express');
const { getProducts, addProduct, deleteProduct, updateProduct } = require('../controller/productController');
const { upload } = require('../middleware/singleUpload');

const router = express.Router();

//get products
router.get('/', getProducts);

//add products
router.post('/', upload.single('img'), addProduct);

//update products
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);

module.exports = router;
