window.onload = function() {

	$(".startGame").on("click", function() {
    	$(".hidden").removeClass('hidden');
    	$("#header").addClass('hidden');
    	run();
    });

    $(".submitAnswers").on("click", function() {
    endGame();
    	
    });
    

  
};

var number = 30;

var intervalId;

var correctCount = 0;
var incorrectCount = 0;

var correct = function(){
	correctCount++;
}

var incorrect = function(){
	incorrectCount++;
}

var checkedQ1 = function(){
    if(document.getElementById('Ghost').checked) {
    	console.log('correct')
		correct();
		console.log(correctCount);

	}else  {
		console.log('incorrect')
		incorrect();
		console.log(incorrectCount);
	}
}

var checkedQ2 = function(){
    if(document.getElementById('Winterfell').checked) {
    	console.log('correct')
		correct();
		console.log(correctCount);

	}else  {
		console.log('incorrect')
		incorrect();
		console.log(incorrectCount);
	}
}

var checkedQ3 = function(){
    if(document.getElementById('Dothraki_Horde').checked) {
    	console.log('correct')
		correct();
		console.log(correctCount);

	}else  {
		console.log('incorrect')
		incorrect();
		console.log(incorrectCount);
	}
}

var checkedQ4 = function(){
    if(document.getElementById('Grey_Worm').checked) {
    	console.log('correct')
		correct();
		console.log(correctCount);

	}else  {
		console.log('incorrect')
		incorrect();
		console.log(incorrectCount);
	}
}

var endGame = function(){
	checkedQ1();
  	checkedQ2();
  	checkedQ3();
  	checkedQ4();
  	stop();
  	$(".submitRow").addClass("hidden");
  	$(".questRow").addClass("hidden");
    $(".results").removeClass("hidden1");
    $(".correct").text(correctCount);
    $(".incorrect").text(incorrectCount);

}



var run = function() {
  intervalId = setInterval(decrement, 1000);
};

var stop = function() {

      clearInterval(intervalId);
    }


var decrement = function() {

  number--;

  $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");

  if (number === 0) {
  	endGame();
    
  }



};








