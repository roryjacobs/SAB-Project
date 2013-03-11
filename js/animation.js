
//Total to be sold to win
var totalAmount = 1000;


//New positions to be recieved by Server
var newPositionOne = 600;
var newPositionTwo = 700;
var newPositionThree = 400;
var newPositionFour = 200;
var newPositionFive = 100;
//Positions in array
var positionArray = [newPositionOne, newPositionTwo, newPositionThree, newPositionFour, newPositionFive];

//set bar names
var barOne = document.getElementById("barOne");
var barTwo = document.getElementById("barTwo");
var barThree = document.getElementById("barThree");
var barFour = document.getElementById("barFour");
var barFive = document.getElementById("barFive");


//calcuation for movements
//Bar one
var $movePositionOne = newPositionOne / totalAmount * 100;
//bar two
var $movePositionTwo = newPositionTwo / totalAmount * 100;
//Bar three
var $movePositionThree = newPositionThree / totalAmount * 100;
//bar four
var $movePositionFour = newPositionFour / totalAmount * 100;
//Bar five
var $movePositionFive = newPositionFive / totalAmount * 100;

     	
//Run animation at start of script.
$(document).ready(function() {
	animation();
});

//Main Animation Function
function animation(){
	$('#capOne').animate({left: $movePositionOne + "%",}, totalAmount, function(){});
	$('#capTwo').animate({left: $movePositionTwo + "%",}, totalAmount, function(){});
	$('#capThree').animate({left: $movePositionThree + "%",}, totalAmount, function(){});
	$('#capFour').animate({left: $movePositionFour + "%",}, totalAmount, function(){});
	$('#capFive').animate({left: $movePositionFive + "%",}, totalAmount, function(){});
	
	sortBars();
}


//sorting function
function sortBars(){
	positionArray.sort();
	positionArray.reverse();

	

	$('#breakPointOne').before(positionArray[0]);
	$('#breakPointTwo').before(positionArray[1]);
	$('#breakPointThree').before(positionArray[2]);
	$('#breakPointFour').before(positionArray[3]);
	$('#breakPointFive').before(positionArray[4]);
	
}


$('#viewWinner').click(function(){
	if($('#winner').css('display') == 'none'){
		//$('#race').animate({width: 75 + "%"});
		$('#winner').animate({ width: 'show' });
	}
	else{
		//$('#race').animate({width: 100 + "%"});
		$('#winner').animate({ width: 'hide' });
	}
});


