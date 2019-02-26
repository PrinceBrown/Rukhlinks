const Product = require('../models/product');


exports.postAddAProduct = (req, res, next) => {
    const newProduct = new Product({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productQuantity: req.body.productQuantity
    });

    newProduct.save().then(savedProduct => {

        res.send(savedProduct);
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    });
}

exports.getStore = (req, res, next) => {
    Product.find({}).then(Product => {
        res.render('Rukhlinks-Store/store/index');
    }).catch(err => {
        if (err) throw err;
    })
}






exports.getStoreProductList = (req, res, next) => {
    Product.find({}).then(products => {
        res.render('Rukhlinks-Store/store/shop', {
            products: products
        });
    }).catch(err => {
        if (err) throw err;
    });


}