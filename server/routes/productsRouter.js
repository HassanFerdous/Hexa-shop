const express = require('express');
const { getProducts, addProduct, deleteProduct, updateProduct } = require('../controller/productController');

const router = express.Router();

//get products
router.get('/', getProducts);

//add products
router.post('/', addProduct);

//update products
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);

module.exports = router;
