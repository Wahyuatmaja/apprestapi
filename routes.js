'use strict';

const { json } = require('body-parser');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadatasuhu);

    app.route('/tampil/:id')
        .get(jsonku.tampildatasuhuperdevmindex)

    app.route('/tambah')
        .post(jsonku.tambahdatauser);

    app.route('/ubah')
        .put(jsonku.updatedatausers);

    app.route('/hapus')
        .delete(jsonku.deleteusers);
}