const express = require('express');
const bodyParser = require('body-parser');
const app = express ();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
