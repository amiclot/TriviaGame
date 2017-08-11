var QuizQuestion = function(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
};

var question1 = new QuizQuestion("what color is the sky?", ["green", "blue", "red", "yellow"], 2);
var question2 = new QuizQuestion("what color is the bee?", ["green", "blue", "red", "yellow"], 4);
var question3 = new QuizQuestion("what color is the stop sign?", ["green", "blue", "red", "yellow"], 3);
var question4 = new QuizQuestion("what color is the dirt?", ["brown", "blue", "red", "yellow"], 1);
