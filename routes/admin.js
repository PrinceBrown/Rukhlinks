const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/Admin');
const ProductsController = require('../controllers/products');


router.get('/', AdminController.getAdminHome)

//Admin - Registeration
router.get('/register', AdminController.getAdminRegister);
router.post('/register', AdminController.postAdminRegister);
//Admin - Login
router.get('/login', AdminController.getAdminLogin);
router.post('/login', AdminController.postAdminLogin);




//PRODUCT
router.post('/add-a-product', ProductsController.postAddAProduct)

module.exports = router;