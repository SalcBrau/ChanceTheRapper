/*
	Braulio Salcedo
	05/03/2017
	Final Project
	Form Code
*/
function validate(name) {
	if (!$("input[name='" + name + "']:checked").val()) {
		return false;
	} else {
		return true;
	}
}

var $error = $('#error');
var $result = $('#result');
var message;
var correct;
var score;
var first;
var second; 
var third;
var fourth;
var fifth; 
var sixth;
var seventh; 
var rightAnswers = ["problem", "jones", "6", "cudi", "aunt", "night", "famous"];
var userAnswers = [];

function validate(name) {
	if (!$("input[name='" + name + "']:checked").val()) {
		$('#' + name).text("*");
		return false;
	} else {
		$('#' + name).text("");
		return true;
	}
}

$('#button').click(function() {
	first = validate('1');
	second = validate('2');
	third = validate('3');
	fourth = validate('4');
	fifth = validate('5');
	sixth = validate('6');
	seventh = validate('7');
	if (first && second && third && fourth && fifth && sixth && seventh) {
		calculateResults();
	} else {
		$.confirm({
			theme: 'modern',
			boxWidth: '30%',
			useBootstrap: false,
			title: 'Error!',
			content: 'One or more questions were left unanswered.',
			type: 'red',
			typeAnimated: true,
			animationBounce: 2.5,
			animationSpeed: 500,
			buttons: {
				tryAgain: {
					text: 'Try again',
					btnClass: 'btn-red',
					action: function(){
					}
				}
			}
		});
	}
});

function calculateResults() {
	correct = 0;
	$('input:checked').each(function() {
		userAnswers.push($(this).val());
	});
	for (var i = 0; i < 7; i++) {
		if (userAnswers[i] === rightAnswers[i]) correct++;
	}
	score = Math.round((correct/7) * 100);
	if (score >= 90) {
		message = "You got an A (" + score + "%). Congratulations!";
	} else {
		message = "You got a ";
		if (score >= 80) {
			message += "B (" + score + "%). Good job!";
		} else if (score >= 70) {
			message += "C (" + score + "%). Not bad!";
		} else if (score >= 60) {
			message += "D (" + score + "%). Better luck next time!";
		} else {
			message += "F (" + score + "%). You suck!";
		}
	}
	$.confirm({
		theme: 'modern',
		boxWidth: '50%',
		useBootstrap: false,
		title: 'Results!',
		type: 'purple',
		content: message,
		typeAnimated: true,
		animationBounce: 2.5,
		animationSpeed: 500,
		buttons: {
			tryAgain: {
				text: 'Try again',
				btnClass: 'btn-purple',
				action: function(){
				}
			}
		}
	});
	userAnswers = [];
}