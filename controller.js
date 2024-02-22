'use strict';

var response = require ('./res');
var connection = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi REST API berjalan!", res);
}

//Menampilkan semua data suhu
exports.tampilsemuadatasuhu = function(req,res){
    connection.query('SELECT * FROM DeviceMaster' , function(error, rows, fileds) {
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
