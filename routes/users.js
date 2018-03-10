const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: 'Im sorry, I was unable to register a new user'});
    } else {
      res.json({success: true, msg: 'Welcome New User!'});
    }
  })
});

//Auth
router.get('/auth', (req, res, next) => {
  res.send('AUTH');
});

//Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});


module.exports = router;