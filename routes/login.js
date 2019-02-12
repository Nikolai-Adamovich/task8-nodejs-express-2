const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('login', {
    title: 'Login'
  });
});

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      //return res.redirect('/users/' + user.username);
      return res.send({
        email: user.email,
        username: user.username,
        id: user._id
      });
    });
  })(req, res, next);
});

module.exports = router;