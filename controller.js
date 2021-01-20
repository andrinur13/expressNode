'use-strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok(`Aplikasi rest api sudah berjalan!`, res);
}


exports.getMahasiswa = function (req, res) {
    let sql = "SELECT * FROM mahasiswa";
    connection.query(sql, function (err, rows, fields) {
        if(err) {
            console.error(err);
        } else {
            response.ok(rows, res);
        }
    })
}


exports.getMahasiswaById = function (req, res) {
    let id = req.body.id;
    let sql = "SELECT * FROM mahasiswa WHERE id = ?";
    connection.query(sql, [id], function (err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            response.ok(rows, res);
        }
    })
}