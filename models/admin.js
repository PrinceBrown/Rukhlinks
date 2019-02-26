const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    registeredOn: {
        type: Date,
        default: Date.now
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;