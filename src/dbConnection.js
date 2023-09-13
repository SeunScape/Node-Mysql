require('dotenv').config()
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB, 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});



// connection.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });

module.exports = connection;
