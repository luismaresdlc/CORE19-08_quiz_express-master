//const sequelize = require('sequelize');
const {models} = require("../models");

// GET /quizzes
exports.index = (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        res.render('quizzes/index', {
          quizzes
        });
    })
    .catch(next);
}