var express = require('express');
var app = express();
var shows = require('./rest/shows.js');

app.get('/rest/shows', (req, res) => res.send(shows()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))