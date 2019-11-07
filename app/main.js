let player1 = {
    score: 0
}
let player2 = {
    score: 0
}
let players = [player1, player2]

function clicked(playerIndex) {
    players[playerIndex].score++
    console.log(players[playerIndex].score)
}
