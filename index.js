let homeCount = 0;
let awayCount = 0;

function homeScore(points) {
    homeCount += points;
    document.getElementById("home-text").innerText = homeCount;
}

function awayScore(points) {
    awayCount += points;
    document.getElementById("away-text").innerText = awayCount;
}

function reset() {
    homeCount = 0;
    awayCount = 0;
    document.getElementById("home-text").innerText = homeCount;
    document.getElementById("away-text").innerText = awayCount;
}