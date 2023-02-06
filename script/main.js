// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page
//using CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
//let theButton = document.querySelector("#buttonOne");

let theButtons = document.querySelectorAll("#buttonHolder img"), theHeading = document.querySelector("#headLine h1"),puzzleBoard = document.querySelector (".puzzle-board");

//step 3
// functionality always goes in the middle -> how do we want the app to behave
function changeBGImage() {
	// the `` is a Javascript template string. It tells the JS engine to evaluate the expression inside the braces - run that little bit of code.In this case it's just pulling the button we clicked on and putting it at the end of the image name (0,1,2,3) 
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}
// step 2
//event handling always goes on the bottom =>
//how do we want users to interact with our app

// 1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

// 1 to many event handling

//add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click",changeBGImage));