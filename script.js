//your JS code here. If required.
const line = document.getElementById("line");
let sum = 0;
setInterval(function(){
	line.style.transform = `rotate(${sum+=5}deg)`;
	
},10)