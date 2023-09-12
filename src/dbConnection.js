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

app.post("/api", (req, res) => {
    const { name } = req.body;
    
    const insertQuery = "INSERT INTO persons (name) VALUES (?)";
    db.query(insertQuery, [name], (err, result) => {
        if (err) {
          console.error("Error inserting name:", err);
          res.status(500).json({ error: "Error inserting name" });
          return;
        }
    
        console.log("Name inserted successfully");
        res.status(200).json({ message: "Name inserted successfully" });
      });
})
connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });

module.exports = connection;
