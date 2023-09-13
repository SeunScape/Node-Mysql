const mysql = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myDbInstance',
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
