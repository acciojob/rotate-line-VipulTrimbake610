//your JS code here. If required.
const line = document.getElementById("line");
line.style.transform = rotate(90deg);

setTimeout(function(){
	line.style.transform = rotate(180deg);
},500)

setTimeout(function(){
	line.style.transform = rotate(270deg);
},800)

