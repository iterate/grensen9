'use strict';

const express = require('express');
const http = require('http');

let app = express();

app.set('view-engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

http.createServer(app).listen(5000, () => {
  console.log("Listen on http://localhost:5000");
});
