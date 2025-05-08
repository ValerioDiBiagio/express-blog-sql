// connessione al db

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db_blog'

});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connesso a mysql');
});

module.exports = connection;