const express = require('express');
const { getProducts, addProduct } = require('../controller/productController');

const router = express.Router();

//get products
router.get('/', getProducts);

//add products
router.post('/', addProduct);

module.exports = router;
