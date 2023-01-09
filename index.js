let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let homePoints = 0;
let guestPoints = 0;

function countHome1() {
    homePoints += 1;
    scoreHome.textContent = homePoints;
}
function countHome2() {
    homePoints += 2;
    scoreHome.textContent = homePoints;
}
function countHome3() {
    homePoints += 3;
    scoreHome.textContent = homePoints;
}

function countGuest1() {
    guestPoints += 1;
    scoreGuest.textContent = guestPoints;
}
function countGuest2() {
    guestPoints += 2;
    scoreGuest.textContent = guestPoints;
}
function countGuest3() {
    guestPoints += 3;
    scoreGuest.textContent = guestPoints;
}

function resetScore() {
    homePoints = 0;
    guestPoints = 0;
    scoreGuest.textContent = guestPoints;
    scoreHome.textContent = homePoints;
}