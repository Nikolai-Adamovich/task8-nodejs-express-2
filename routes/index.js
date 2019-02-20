var express = require('express');
var router = express.Router();
const NewsModel = require('../models/news.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  /* Find news */
  NewsModel.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.render('index', {
        title: 'Some News',
        newsList: data
      });
    }
  });
});

module.exports = router;
