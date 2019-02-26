const express = require('express');
const bcrypt = require('bcryptjs');

//Models
const Admin = require('../models/Admin');

exports.getAdminHome = (req, res, next) => {
    res.render('Rukhlinks-Admin/index');
}


exports.getAdminRegister = (req, res, next) => {

    res.render('Rukhlinks-Admin/Login_register/register');
}

exports.postAdminRegister = (req, res, next) => {

    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const admin = new Admin({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(admin.password, salt, (err, hash) => {
            admin.password = hash;

            admin.save().then(RegisteredAdmin => {
                console.log('Registration Successful...')
                res.status(302).redirect('/admin/login');
            }).catch(err => {
                console.log('Registration Failed');
                if (err) return err;
            });
        })
    });




}

exports.getAdminLogin = (req, res, next) => {

    res.render('Rukhlinks-Admin/Login_register/login');
}

exports.postAdminLogin = (req, res, next) => {

    Admin.findOne({
        email: req.body.email
    }).then(RegisteredAdmin => {
        if (Admin) {
            bcrypt.compare(req.body.password, Admin.password, (err, matchedAdmin) => {
                if (matchedAdmin) {
                    console.log('Password Verified...');
                    res.send('Welcome ' + Admin.firstName + ' ' + Admin.lastName);
                } else {
                    console.log('Verification Failed!');
                    res.render('Rukhlinks-Admin/Login_register/login');
                }
            })
        }
    }).catch(err => {
        if (err) throw err;
    });
}