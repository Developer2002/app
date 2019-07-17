const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Olá mundo');
});

app.get('/user', function(req, res) {
  res.send('Um user');
});

app.listen(process.env.PORT || 5000);