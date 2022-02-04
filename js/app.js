/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let winner, turn






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
// const squares = []

/*----------------------------- Event Listeners -----------------------------*/
//When you click a square marks as 1(x) if turn = true, else 0(o) if turn = false

//when you click reset

//

/*-------------------------------- Functions --------------------------------*/
// 3.1) Call an initialize function

	
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.
init()

function init(evt) {
//make board array to 9 nulls
squares = [null, null, null, null, null, null, null, null, null]
//initialize who's turn
turn = 1 //player 'X'
//make winner variable = null
winner = null
render()
}


	  // 3.3.2) Render a message reflecting the current game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.

function render(evt) {
  //loop over the board array
  renderBoard()
  
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
  
}
// function play(evt) {
//   if (turn = true) {
//     X
//   } else {
//     O
//   }
// }

//resetting the board
function reset(evt) {
  clearBoard()
  toggleResetButton()
  resetMessage()
}



function takeTurns(evt) {

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

