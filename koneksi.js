var mysql = require('mysql');

//.Koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123localhost',
    database:'fullstack_js'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql konek');
});

module.exports=conn;  //export fungsi untuk diimport di file lain