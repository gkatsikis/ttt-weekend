/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let winner, turn, squares







/*------------------------ Cached Element References ------------------------*/



const message = document.querySelector('#message')

const resetBtn = document.querySelector('#resetButton')

const gameBoard = document.querySelectorAll('.game-board')
console.log(gameBoard)

// const squares = [topLeft, topCenter, topRight, midLeft, midCenter, midRight, bottomLeft, bottomCenter, bottomRight]


/*----------------------------- Event Listeners -----------------------------*/

	
gameBoard.forEach(div => div.addEventListener('click', clickSquare))






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
  console.log(squares)
  squares.forEach((square, index) => {
    console.log(gameBoard[index]) 
    if (squares[index] === 1){
      gameBoard[index].textContent = "X"
    }
    if (squares[index] === -1) {
      gameBoard[index].textContent = "O"
    }
  })
}

function renderMessage(evt) {
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
  } else if (winner === 1) {
    message.textContent = "X's have won it!"
  } else {
    message.textContent = "O's have won it!"
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
  console.log(squares)
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
  [squares[0],squares[1],squares[2]],
  [squares[3],squares[4],squares[5]],
  [squares[6],squares[7],squares[8]],
  [squares[0],squares[3],squares[6]],
  [squares[1],squares[4],squares[7]],
  [squares[2],squares[5],squares[8]],
  [squares[0],squares[4],squares[8]],
  [squares[2],squares[4],squares[6]]
]

}



// 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.


//resetting the board
function reset(evt) {
  clearBoard()
  toggleResetButton()
  resetMessage()
  const giveItTime = setTimeout(init(), 5000)
  giveItTime
}


function clearBoard(evt) {
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

// toggleResetButton()
function toggleResetButton(evt) {
  resetBtn.style.display='none'  
}

// resetMessage()
function resetMessage(evt) {
  message.innerText = "Ready to play again?"
}

// console.log(gameBoard[0])

