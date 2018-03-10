const express = require('express');
const router = express.Router();

//Register
router.post('/register', (req, res, next) => {
  res.send('REGISTER');
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