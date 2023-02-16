// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page
//using CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
//let theButton = document.querySelector("#buttonOne");

let theButtons = document.querySelectorAll("#buttonHolder img"),  theHeading = document.querySelector("#headLine h1"),
puzzleBoard = document.querySelector(".puzzle-board"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll(".drop-zone"),
// store the dragged piece in a global variable because we need it in the handleDrop function
draggedPiece;

//step 3
// functionality always goes in the middle -> how do we want the app to behave
function changeBGImage() {
	// the `` is a Javascript template string. It tells the JS engine to evaluate the expression inside the braces - run that little bit of code.In this case it's just pulling the button we clicked on and putting it at the end of the image name (0,1,2,3) 

	// bug fix #2 goes here
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
	console.log('started dragging this piece', this);

	// store a reference to the puzzle piece image that we're dragging so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
	console.log('dragged over me');
}

function handleDrop(e) {
	e.preventDefault();
	console.log('dropped something on me');
	// this line is going to move the dragged piece from the left side of the board into whatever drop zone we choose. appendChild means "add element to the container"
	this.appendChild(draggedPiece);
}
// step 2
//event handling always goes on the bottom =>
//how do we want users to interact with our app

// 1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

// 1 to many event handling

//add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click",changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover",handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop",handleDrop));