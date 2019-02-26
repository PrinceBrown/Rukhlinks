const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/', productController.getStore);
router.get('/shop', productController.getStoreProductList);


module.exports = router;