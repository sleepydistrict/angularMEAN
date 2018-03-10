const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); //request to api from dif domain name
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

const port = 3000;

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Invald Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
