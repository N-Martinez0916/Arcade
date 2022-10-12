let board = document.querySelectorAll('table td')
const winMessage = document.getElementById('winMessage')
function isWin(board) {
  let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let combo of winCombos) {
    if (
      board[combo[0]].textContent == board[combo[1]].textContent && board[combo[1]].textContent == board[combo[2]].textContent && board[combo[0]].textContent != ''
    ) {
      return true
    }
  }
    return false

}

startGame(board)

function startGame(board) {
  let i = 0
  for (let box of board) {
    box.addEventListener('click', function playerMoves() {
      if (i % 2 === 0) {
      this.textContent = 'X'
      } else {
        this.textContent = 'O'
      }

      if (isWin(board)) {
        winMessage.innerHTML = `Player ${this.textContent} Wins!!`
        
      } else if (i == 8) {
        winMessage.innerHTML = `DRAW`
      }
      i++
    })
  }
}
