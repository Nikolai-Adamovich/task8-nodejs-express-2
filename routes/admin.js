const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    next();
  } else {
    res.redirect('../login');
  }
});

router.get('/', (req, res, next) => {
  res.render('admin', { title: 'Admin' });
});

router.get('/create-news', (req, res, next) => {
  res.render('create-news', { title: 'Create News' });
});

module.exports = router;