
//funkcje stałe
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

//przyciski
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreOne() {
    homeScore = homeScore + 1
    homeStoreEl.innerText = homeScore
}


function increaseHomeScoreTwo() {
    homeScore = homeScore + 2
    homeStoreEl.innerText = homeScore
}


function increaseHomeScoreThree() {
    homeScore = homeScore + 3
    homeStoreEl.innerText = homeScore
}

//funkcje stałe
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

//przyciski
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")



function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.innerText = guestScore
}


function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.innerText = guestScore
}


function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.innerText = guestScore
}

