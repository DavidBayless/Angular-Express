var express = require('express');
var knex = require('../db/knex');

var router = express.Router();

function books() {
  return knex('books');
}

// Routes for /api/books/
router.get('/', function(req, res, next) {
  books().select()
  .then(function(response) {
    res.json(response);
  });
});

router.get('/:id', function(req, res, next) {
  books().where('id', req.params.id)
  .then(function(response) {
    res.json(response);
  });
});


module.exports = router;
