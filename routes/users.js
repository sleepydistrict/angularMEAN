const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
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
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByName(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'Im sorry, that user was not found'});
    }

    User.comparePassword(password, user.password, (eer, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(data.user, config.secret, {
          expiresIn: 604800 //1 week
        });

        res.json({
          success: true,
          token: 'Bearer ' +token,
          user: {
            id: data.user._id,
            name: data.user.name,
            username: data.user.username,
            email: data.user.email
          }
        });
      } else {
        return res.json({success: flase, msg: 'Im sorry, that password is incorrect'});
      }
    });
  });
});

//Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });


module.exports = router;