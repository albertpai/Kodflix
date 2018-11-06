const express = require('express');
const app = express();
const path = require('path');
const db = require('./db.js');
const port = process.env.PORT || 3001;

// Connect backend to database
db.connect()
  .then(dbObject => {

    app.get('/rest/shows', (req, res) => {
      dbObject.collection('shows').find({}).toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    })

    // Serve any static files   
    app.use(express.static(path.join(__dirname, '../../build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    // Show a message when backend is running
    app.listen(port, () => console.log(`Listening on port ${port}!`));
  });