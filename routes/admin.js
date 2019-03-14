const express = require('express');
const router = express.Router();
const NewsModel = require('../models/news.js');

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

router.get('/edit-news/:slug', (req, res, next) => {
  NewsModel.findOne({
    slug: req.params.slug
  }, (err, news) => {
    if (err || !news) {
      res.redirect('/');
    } else {
      res.render('edit-news', {
        title: 'Edit News',
        news: news
      });
    }
  });
});

router.get('/delete-news/:slug', (req, res, next) => {
  NewsModel.findOne({
    slug: req.params.slug
  }, (err, news) => {
    if (err || !news) {
      res.redirect('/');
    } else {
      res.render('delete-news', {
        title: 'Delete News',
        news: news
      });
    }
  });
});

module.exports = router;