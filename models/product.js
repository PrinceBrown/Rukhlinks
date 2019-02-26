const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 300
    },
    productPrice: {
        type: Number,
        required: true,
        trim: true,
        default: 0

    },
    productCategory: {
        type: Number,
        required: true,
        trim: true


    },
    productDescription: {
        type: String,
        trim: true,
        maxlength: 3000
    },
    productQuantity: {
        type: Number,
        required: true,
        trim: true,
        default: 1
    }

});

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;