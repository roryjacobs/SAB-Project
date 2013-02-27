//Total to be sold to win
var totalAmount = 1000;

//New positions to be recieved by Server
var newPositionOne = 300;
var newPositionTwo = 100;

//set bar names
var barOne = document.getElementById("barOne");
var barTwo = document.getElementById("barTwo");

//calcuation for movements
//Bar one
var barOneWidth = barOne.clientWidth;
var $movePositionOne = newPositionOne / totalAmount * barOneWidth;
//bar two
var barTwoWidth = barTwo.clientWidth;
var $movePositionTwo = newPositionTwo / totalAmount * barTwoWidth;
     	
//Run animation at start of script.
$(document).ready(function() {
	animation();
});

//Main Animation Function
function animation(){
	$('#capOne').animate({marginLeft: $movePositionOne,}, totalAmount, function(){});
	$('#capTwo').animate({marginLeft: $movePositionTwo,}, totalAmount, function(){});

}





