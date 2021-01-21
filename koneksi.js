const mysql = require('mysql');

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'andri',
    // port:3307,
    password: 'root',
    database: 'nodeexpress'
});

conn.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log("MySQL terkoneksi");
    }
})

module.exports = conn;