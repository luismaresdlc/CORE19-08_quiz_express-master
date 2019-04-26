//const path = require('path');
const Sequelize = require('sequelize');

const options = {logging: false};
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options);

//const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite"
//const sequelize = new Sequelize(url);

sequelize.define(  // define Quiz model (table quizzes)
    'quiz',
    {
        question: Sequelize.STRING,
        answer: Sequelize.STRING
    }
);

const Quiz = sequelize.models.quiz

sequelize.sync() // Syncronize DB and seed if needed
    .then(() => Quiz.count())
    .then(count => {
        if (count === 0) {
            return Quiz.bulkCreate([
                {question: "Capital of Italy", answer: "Rome"},
                {question: "Capital of France", answer: "Paris"},
                {question: "Capital of Spain", answer: "Madrid"},
                {question: "Capital of Portugal", answer: "Lisbon"}
            ])
                .then(c => console.log(`DB filled with ${c.length} quizzes.`));
        } else {
            console.log(`DB exists & has ${count} quizzes.`);
        }
    })
    .catch(console.log);

module.exports = sequelize;