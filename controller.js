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

//Menampilkan data suhu berdasarkan DevmIndex
exports.tampildatasuhuperdevmindex=function(req,res){
    let id =req.params.id; 
    connection.query('SELECT * FROM DeviceMaster WHERE DevmIndex = ?', [id], function(error, rows, fields){
        if(error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//Tambah Data Suhu
