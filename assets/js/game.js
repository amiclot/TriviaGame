window.onload = function() {


  
};





var QuizQuestion = function(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
};

var question1 = new QuizQuestion("what color is the sky?", ["green", "blue", "red", "yellow"], 2);
var question2 = new QuizQuestion("what color is the bee?", ["green", "blue", "red", "yellow"], 4);
var question3 = new QuizQuestion("what color is the stop sign?", ["green", "blue", "red", "yellow"], 3);
var question4 = new QuizQuestion("what color is the dirt?", ["brown", "blue", "red", "yellow"], 1);

var number = 30;

var intervalId;


    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        alert("Time Up!");
      }
    }

    $(".startGame").on("click", function() {
    	$(".hidden").removeClass('hidden');
    	$("#header").addClass('hidden');
    	run();
    });
    