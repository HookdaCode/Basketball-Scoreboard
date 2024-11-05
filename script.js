let team1count = 0;
let team2count = 0;

team1Score = document.getElementById("team1")
team2Score = document.getElementById("team2")

function t1Add1p() {
  team1count += 1
  team1Score.textContent = "TEAM 1: " + team1count
}

function t1Add2p() {
  team1count += 2
  team1Score.textContent = "TEAM 1: " + team1count
}

function t1Add3p() {
  team1count += 3
  team1Score.textContent = "TEAM 1: " + team1count
}

// team 2

function t2Add1p() {
  team2count += 1
  team2Score.textContent = "TEAM 2: " + team2count
}
function t2Add2p() {
  team2count += 2
  team2Score.textContent = "TEAM 2: " + team2count
}
function t2Add3p() {
  team2count += 3
  team2Score.textContent = "TEAM 2: " + team2count
}