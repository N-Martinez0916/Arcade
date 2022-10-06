// state
let state = document.getElementById('board');
let bot = document.getElementById('')

let player1 = document.getElementById('player1')
let name1 = document.getElementById('name1')
// const text1 = document.getElementById('text1')
const submit1 = document.getElementById('submit1')
const score1 = document.getElementById('score1')

let player2 = document.getElementById('player2')
let name2 = document.getElementById('name2')
// const text2 = document.getElementById('text2')
const submit2 = document.getElementById('submit2')
const score2 = document.getElementById('score2')






const gameState = {
    players: ['X', 'O'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
}

// let boardStatus = gameState.board[[[]]]
let currentPlayer = gameState.players[0]
state.addEventListener ('click', function (event){
    if (event.target === null) {
        event.target.innerHTML = currentPlayer
        console.log(boardStatus)
        currentPlayer = gameState.players[1]
        }
gameState.players.reverse()
})

// function buildInitialState() {
// }

// // render
// function renderState() {

// }

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
// function onBoardClick("click" function() {




// }) {
//   // update state, maybe with another dozen or so helper functions...

//   renderState() // show the user the new state
// }
// const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc