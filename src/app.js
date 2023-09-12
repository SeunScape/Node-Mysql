const express = require('express');
const bodyParser = require('body-parser');
const app = express ();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// app.post('/api', (req, res) => {
   
//   });

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
