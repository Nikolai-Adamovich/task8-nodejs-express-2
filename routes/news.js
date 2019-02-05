var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  res.send('GET');
});

router.get('/:id', function(req, res, next) {
  res.send(`GET ${req.params.id}`);
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
