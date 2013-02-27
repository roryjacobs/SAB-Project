var newPosition = 50;
var barOne = document.getElementById("barOne");
var barOneWidth = barOne.clientWidth;

var $movePositionOne = newPosition / 100 * barOneWidth;
var $positionTwo;
     	
$(document).ready(function() {				
	$('#capOne').animate({
       	marginLeft: $movePositionOne,
	 }, 1000, function() {
				});								  
});

