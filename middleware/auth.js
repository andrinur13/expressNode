let connection = require('../koneksi');
let mysql = require('mysql');
let md5 = require('md5');
let response = require('../res');
let jwt = require('jsonwebtoken');
let config = require('../config/secret');
let ip = require('ip');

exports.registrasi = function (req, res) {
    let post = {
        username: req.body.username,
        password: md5(req.body.password),
        email: req.body.email,
        role: req.body.role,
        tanggal_daftar: new Date()
    };

    let data = {
        'status': 200,
        'data': post
    }

    res.json(data);
    res.end();
}