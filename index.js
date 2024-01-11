let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function plusHomeOne() {
    homeCount++
    homeEl.textContent = homeCount
}

function plusHomeTwo() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function plusHomeThree() {
    homeCount += 3
    homeEl.textContent = homeCount
}


function plusGuestOne() {
    guestCount++
    guestEl.textContent = guestCount
}

function plusGuestTwo() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function plusGuestThree() {
    guestCount += 3
    guestEl.textContent = guestCount
}


function newGame() {
    homeCount = 0
    guestCount = 0
    homeEl.textContent = homeCount
    guestEl.textContent = guestCount
}