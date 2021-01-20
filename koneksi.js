const mysql = require('mysql');

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'andri',
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