const mysql = require('mysql2');
import 'dotenv/config';
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });

module.exports = connection;
