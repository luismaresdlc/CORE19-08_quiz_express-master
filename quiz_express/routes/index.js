var express = require('express');
var router = express.Router();

const quizController = require('../controllers/quiz')

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits');
});

/* GET Quizzes page. */
router.get('/quizzes', quizController.index);
module.exports = router;
