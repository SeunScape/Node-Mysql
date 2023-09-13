require('dotenv').config();
const express = require('express');

// const bodyParser = require('body-parser');
const app = express ();
const db = require('./dbConnection');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

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
});
app.get("/api", (req, res) => {
    db.query("SELECT * FROM persons", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.put("/api/:user_id", (req, res) => {
    const userId = req.params.user_id;
    const queryUpdate = "UPDATE persons SET name = ? WHERE id = ?";
    
    db.query(queryUpdate,
       [req.body.name, userId], 
       (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: "Error updating user" });
        } else {
          res.send(result);
        }
    });
});
    app.delete("/api/:user_id", (req, res) => {
        queryDelete = "DELETE FROM persons WHERE id = ?";
        db.query(
            queryDelete,
            req.params.user_id,
            (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              }
        );
    });
  
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
