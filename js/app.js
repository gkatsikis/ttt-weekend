/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let winner, turn, squares







/*------------------------ Cached Element References ------------------------*/



const message = document.querySelector('#message')

const resetBtn = document.querySelector('#resetButton')

const gameBoard = document.querySelectorAll('.game-board')
// console.log(gameBoard)

const topLeft = document.querySelector('#sq0')
const topCenter = document.querySelector('#sq1')
const topRight = document.querySelector('#sq2')
const midLeft = document.querySelector('#sq3')
const midCenter = document.querySelector('#sq4')
const midRight = document.querySelector('#sq5')
const bottomLeft = document.querySelector('#sq6')
const bottomCenter = document.querySelector('#sq7')
const bottomRight = document.querySelector('#sq8')


/*----------------------------- Event Listeners -----------------------------*/

	
gameBoard.forEach(div => div.addEventListener('click', clickSquare))

resetBtn.addEventListener("click", reset)




/*-------------------------------- Functions --------------------------------*/

init()

function init(evt) {
//make board array to 9 nulls
squares = [
  null, null, null, 
  null, null, null,
  null, null, null]
//initialize who's turn
turn = -1 //player 'O>>X later in renderTurn() so X starts first'
//make winner variable = null
winner = null
render()
}

function render(evt) {
  renderMessage()
  renderBoard()
}

// function renderBoard(evt) {
//   for(let i = 0; i < squares.length; i++) {
//     if (squares[i] === 1){
//       gameBoard[i].textContent = "X"
//     }
//     if (squares[i] === -1) {
//       gameBoard[i].textContent = "O"
//     }
// }
// }

function renderBoard(evt) {
  // console.log(squares)
  squares.forEach((square, index) => {
    // console.log(gameBoard[index]) 
    if (squares[index] === 1){
      gameBoard[index].textContent = "X"
    }
    if (squares[index] === -1) {
      gameBoard[index].textContent = "O"
    }
  })
}

function renderMessage(evt) {
  checkWinner()
  winner === null ? renderTurn() : renderWinner()
}

function renderTurn(evt) {
  turn *= -1
  // console.log(turn)
  turn === 1 ? message.textContent = "It's X's turn" : message.textContent = "It's O's turn"  
}



function renderWinner(evt) {
  if (winner === 'T') {
    message.textContent = "It's a tie!"
    resetBtn.style.display='block'
  } else if (winner === 1) {
    message.textContent = "X's have won it!"
    resetBtn.style.display='block'
  } else {
    message.textContent = "O's have won it!"
    resetBtn.style.display='block'
  }
  return
}


function clickSquare(evt) {  //handleClick
  const index = evt.target.id.replace('sq','')
  if (squares[index] === null) {
    squares[index] = turn
  } else {
    clickSquare()
  }
  // console.log(squares)
  render()
}




//  The Job of the Render Function

// 1. Needs to look at every element
//    a. forEach
//    b. for loop
// 2. What code needs to be executed on each element?
//    a. if 1 = x
//    b. else if -1 = 0
// 3. How can we update the board?
//    a. what HTML element we are targeting
//    b. innerText, textContent, 

// topLeft.textContent = "X"


function checkWinner(evt) {
let winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

const sums = []

for (let i = 0; i < winningCombos.length; i ++){
  const sumEx = squares[winningCombos[i][0]] + squares[winningCombos[i][1]] + squares[winningCombos[i][2]]
  sums.push(sumEx)
}
let xWon = sums.some(answer => answer === 3)
let oWon = sums.some(answer => answer === -3)
let tie = squares.every(square => square !== null)
if (xWon) {
  winner = 1
} else if (oWon) {
  winner = -1
} else if (tie) {
  winner = 'T'
}
}



// const sum = (total, single) => total + single
// let winArray = winningCombos.map(winArr => winArr.reduce(sum) === 3 || winArr.reduce(sum) === -3)
// console.log(winArray)

//resetting the board
function reset(evt) {
  clearBoard()
  toggleResetButton()
  resetMessage()
  init()
}


function clearBoard(evt) {
  squares = [null, null, null, null, null, null, null, null, null]
  topLeft.innerText = ""
  topCenter.innerText = ""
  topRight.innerText = ""
  midLeft.innerText = ""
  midCenter.innerText = ""
  midRight.innerText = ""
  bottomLeft.innerText = ""
  bottomCenter.innerText = ""
  bottomRight.innerText = ""
}

function toggleResetButton(evt) {
  resetBtn.style.display='none'  
}

function resetMessage(evt) {
  message.innerText = "Ready to play again?"
}

// console.log(gameBoard[0])

