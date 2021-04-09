const mysql = require("mysql")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codingcom_login'
});

module.exports = db