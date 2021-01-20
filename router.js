'use-strict';

module.exports = function (app) {
    let jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/mahasiswa').get(jsonku.getMahasiswa);

    app.route('/mahasiswaid').get(jsonku.getMahasiswaById);

    app.route('/addmahasiswa').post(jsonku.addMahasiswa);
}