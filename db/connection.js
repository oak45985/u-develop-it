//connect to database
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'J0hnny@non',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;