const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-wkslz.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.get('/', async function(req, res) {
  const users = await User.find();

  res.send(users);
});

app.get('/user', function(req, res) {
  res.send('Um user');
});

app.listen(process.env.PORT || 5000);