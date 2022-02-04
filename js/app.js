/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let winner, turn

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


let squares

/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board')

const topLeft = document.querySelector('#sq0')
const topCenter = document.querySelector('#sq1')
const topRight = document.querySelector('#sq2')
const midLeft = document.querySelector('#sq3')
const midCenter = document.querySelector('#sq4')
const midRight = document.querySelector('#sq5')
const bottomLeft = document.querySelector('#sq6')
const bottomCenter = document.querySelector('#sq7')
const bottomRight = document.querySelector('#sq8')

const message = document.querySelector('#message')

const resetBtn = document.querySelector('#resetButton')

const gameBoard = document.querySelectorAll('.game-board')
// console.log(gameBoard)

// const squares = [topLeft, topCenter, topRight, midLeft, midCenter, midRight, bottomLeft, bottomCenter, bottomRight]
//or


/*----------------------------- Event Listeners -----------------------------*/
//When you click a square marks as 1(x) if turn = true, else -1(o) if turn = false
// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).


/*-------------------------------- Functions --------------------------------*/

init()

function init(evt) {
//make board array to 9 nulls
squares = [null, null, null, null, null, null, null, null, null]
//initialize who's turn
turn = -1 //player 'X'
//make winner variable = null
winner = null
render()
}

function render(evt) {
  renderBoard()
  renderMessage()
}

function renderBoard(evt) {
  for(let i = 0; i < squares.length; i++) {
    if (squares[i] === 1){
      gameBoard[i].textContent = "X"
    }
    if (squares[i] === -1) {
      gameBoard[i].textContent = "O"
    }
}
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


