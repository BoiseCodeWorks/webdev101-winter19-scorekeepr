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
    if (winValidation()) {
        return
    }
    players[playerIndex].score++
    drawScores()
}

function winValidation() {
    if ((players[0].score >= finalScore || players[1].score >= finalScore) && winByTwo()) {
        return true
    }
    return false
}

function winByTwo() {
    return Math.abs(players[0].score - players[1].score) > 1;
}

function reset() {
    players[0].score = 0
    players[1].score = 0
    drawScores()
}

function drawScores() {
    player1Elem.textContent = players[0].score.toString()
    player2Elem.textContent = players[1].score.toString()
}

