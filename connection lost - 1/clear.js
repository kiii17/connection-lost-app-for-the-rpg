var datetime = new Date().toLocaleTimeString();
document.getElementById("time").textContent = datetime;



function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

function timerFunction(){
	if(document.getElementById("timerButton").innerText=="Start an 1-hour timer"){
		document.getElementById("timerButton").innerText = "Reset timer";
		var stopTime = new Date(Date.now() + 3600000).toLocaleTimeString();
		document.getElementById("endTime").innerHTML = "The game should end at: "+stopTime;
	}else{
		document.getElementById("timerButton").innerText = "Start an 1-hour timer";
		document.getElementById("endTime").innerHTML ="";
	}
	
}



