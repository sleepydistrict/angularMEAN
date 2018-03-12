const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); //request to api from dif domain name
const mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport')

// mongoose.connect(config.database);

// mongoose.connection.on('connected', () => {
//   console.log('Connected to database ' +config.database);
// })

// mongoose.connection.on('error', (err) => {
//   console.log('Woops, there was a database error ' +config.database);
// })

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`Database error: ${err}`));

const app = express();

const users = require('./routes/users');

const port = 3000;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'piblic')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Invald Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
