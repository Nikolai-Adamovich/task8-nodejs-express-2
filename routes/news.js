const express = require('express');
const router = express.Router();
const newsModel = require('../models/news.js');

/* GET news listing. */
router.get('/', function(req, res, next) {
  newsModel.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/:id', function(req, res, next) {
  newsModel.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(data);
    }
  });
});

router.post('/', function(req, res, next) {
  res.send('POST');
});

router.put('/:id', function(req, res, next) {
  res.send(`PUT ${req.params.id}`);
});

router.delete('/:id', function(req, res, next) {
  res.send(`DELETE ${req.params.id}`);
});

module.exports = router;
