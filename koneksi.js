var mysql = require('mysql');

//.Koneksi database
const conn = mysql.createConnection({
    host:'192.168.1.25',
    user:'root',
    password:'root!td_d3v_999',
    database:'fullstack_js'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql konek');
});

module.exports=conn;  //export fungsi untuk diimport di file lain