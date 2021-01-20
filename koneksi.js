const mysql = require('mysql');

//create connection
const conn = mysql.createConnection({
    host: 'http://www.futsaloka.my.id',
    user: 'root',
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