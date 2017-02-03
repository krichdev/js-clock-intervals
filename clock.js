document.addEventListener('DOMContentLoaded', function(){
var seconds = 0;
var minutes = 0;
var hours = 0;

// Variables to play with live time
// var now = new Date();
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();

function secondsHand(){
	seconds ++;
	document.getElementById("second").style.transform = "rotate(" + (seconds * 6) + "deg)";
}

function minutesHand(){
	minutes ++;
	document.getElementById("minute").style.transform = "rotate(" + ((minutes*6)/60) + "deg)";
}

function hoursHand(){
	hours ++;
	document.getElementById("hour").style.transform = "rotate(" + ((hours*6)/360) + "deg)";
}

setInterval(secondsHand, 1000)
setInterval(minutesHand, 1000)
setInterval(hoursHand, 1000)

});



































// document.addEventListener("DOMContentLoaded", function() {
	
// 	var x = 0;
	
// 	var tickTock = function() {
// 		x+=1; 
// 		document.getElementById("second").style.transform = "rotate(" + (x/60*360) + "deg)";
// 		document.getElementById("minute").style.transform = "rotate(" + (x/(60*60)*360) + "deg)";
// 		document.getElementById("hour").style.transform = "rotate(" + (x/(60*60*12)*360) + "deg)";
// 	};
	
// 	var interval = setInterval(tickTock,1000);

// });