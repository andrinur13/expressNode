'use-strict';

module.exports = function (app) {
    let jsonku = require('./controller');
    let jsonAuth = require('./middleware/auth');

    app.route('/').get(jsonku.index);

    app.route('/mahasiswa').get(jsonku.getMahasiswa);

    app.route('/mahasiswaid').get(jsonku.getMahasiswaById);

    app.route('/addmahasiswa').post(jsonku.addMahasiswa);

    app.route('/updatemahasiswa').put(jsonku.updateMahasiswa);

    app.route('/deletemahasiswa').delete(jsonku.deleteMahasiswa);

    app.route('/registrasi').post(jsonAuth.registrasi);

}