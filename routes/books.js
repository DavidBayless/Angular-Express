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

router.post('/', function(req, res, next) {
  books().insert({bookName: req.body.name, author: req.body.author, bookDescription: req.body.description, imageUrl: req.body.image})
  .then(function(response) {
    res.status = 200;
    res.end();
  });
});

router.delete('/:id', function(req, res, next) {
  books().where('id', req.params.id).del()
  .then(function(response) {
    res.status = 200;
    res.end();
  });
});

router.put('/:id', function(req, res, next) {
  books().where('id', req.params.id).update({bookName: req.body.name, author: req.body.author, bookDescription: req.body.description, imageUrl: req.body.image})
  .then(function(response) {
    res.status = 200;
    res.end();
  });
});


module.exports = router;
