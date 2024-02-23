'use strict';

var response = require ('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi REST API berjalan!", res);
}

//Menampilkan semua data suhu
exports.tampilsemuadatasuhu = function(req,res){
    connection.query('SELECT * FROM users' , function(error, rows, fileds) {
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
    connection.query('SELECT * FROM users WHERE id = ?', [id], function(error, rows, fields){
        if(error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//Menambahkan data suhu
exports.tambahdatauser = function(req, res) {
    let user_name = req.body.user_name;
    let password = req.body.password;
    let status = req.body.status;
    let reg_tgl= req.body.reg_tgl;

    connection.query('INSERT INTO users (user_name, password, status, reg_tgl) VALUES(?,?,?,?)',
    [user_name,password,status,reg_tgl],
    function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Data berhasil ditambahkan", res)
        }
    });
};

//Edit & Update data users
exports.updatedatausers = function(req, res) {
    let id = req.body.id;
    let user_name = req.body.user_name;
    let password = req.body.password;
    let status = req.body.status;
    let reg_tgl = req.body.reg_tgl;

    connection.query('UPDATE users SET user_name=?, password=?, status=?, reg_tgl=? WHERE id=?', [user_name,password,status,reg_tgl,id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Mengubah Data.", res)
        }
        
    });
}

//Menghapus data berdasarkan id users
exports.deleteusers = function(req,res) {
    let id = req.body.id;
    connection.query('DELETE FROM users WHERE id=?',[id], 
    function(error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("Data berhasil dihapus.", res);
        }
    });
};
