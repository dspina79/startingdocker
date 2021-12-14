var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let subtitle = "This is a listing of personal to-dos."
  res.render('index', { title: 'My Todo List', todos: [], subtitle: subtitle });
});

module.exports = router;
