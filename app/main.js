let player1 = {
    score: 0
}
let player2 = {
    score: 0
}
let players = [player1, player2]

let player1Elem = document.querySelector("#count1")
let player2Elem = document.querySelector("#count2")

let finalScore = 11

function clicked(playerIndex) {
    players[playerIndex].score++
    player1Elem.textContent = players[0].score.toString()
    player2Elem.textContent = players[1].score.toString()
}

function winValidation() {
    if (players[0].score == finalScore) {

    }
}


