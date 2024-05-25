let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

function homeScoreOne(){
	homeScore.textContent = parseInt(homeScore.textContent)+1;
}
function homeScoreTwo(){
	homeScore.textContent = parseInt(homeScore.textContent)+2;
}
function homeScoreThree(){
	homeScore.textContent = parseInt(homeScore.textContent)+3;
}
function clearHome(){
	homeScore.textContent = 0;
}
function guestScoreOne(){
	guestScore.textContent = parseInt(guestScore.textContent)+1;
}
function guestScoreTwo(){
	guestScore.textContent = parseInt(guestScore.textContent)+2;
}
function guestScoreThree(){
	guestScore.textContent = parseInt(guestScore.textContent)+3;
}
function clearGuest(){
	guestScore.textContent = 0;
}