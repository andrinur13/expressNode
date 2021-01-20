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


exports.addMahasiswa = function (req, res) {
    let inputan = [req.body.nim, req.body.nama, req.body.prodi];
    let sql = "INSERT INTO mahasiswa (nim, nama, prodi) VALUES(?, ?, ?)";

    connection.query(sql, inputan, function (err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            response.ok("Data berhasil ditambahkan", res);
        }
    })
}

exports.updateMahasiswa = function (req, res) {
    let inputan = [req.body.nim, req.body.nama, req.body.prodi, req.body.id];

    let sql = "UPDATE mahasiswa SET nim=?, nama=?, prodi=? WHERE id=?";

    connection.query(sql, inputan, function (err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            response.ok("Data berhasil diupdate", res);
        }
    })
}


exports.deleteMahasiswa = function (req, res) {
    let id = req.body.id;

    let sql = "DELETE FROM mahasiswa WHERE id=?";

    connection.query(sql, [id], function (err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            response.ok("Data berhasil dihapus", res);
        }
    })
}