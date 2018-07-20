var express = require('express');
var path = require('path');
var app = express();
var shows = require('./rest/shows.js');
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => res.send(shows()));

// Serve any static files   
app.use(express.static(path.join(__dirname, '../../build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`))