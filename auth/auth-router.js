const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js')




const router = require('express').Router();
const authData = require('./auth-model.js');


router.post('/register', (req, res) => {
  // implement registration
  let newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 12);

  newUser.password = hash;

  authData
    .registerUser(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack })
    })
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;
  console.log(`1`, req.body)

  authData
    .getUser({ username })
    .first()
    .then( user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token })
      } else {
        res.status(401).json({ error: 'Invalid Credentials'})
      }     
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack })
    })
});

router.get('/register', (req, res) => {
  res.status(200).json({ API: 'WORKING'})
})

router.get('/login', (req, res) => {
  res.status(200).json({ API: 'WORKING'})
})

function generateToken(user){
  const payload ={
      username: user.username
  }
  const options = {
    expiresIn: "1h"
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
