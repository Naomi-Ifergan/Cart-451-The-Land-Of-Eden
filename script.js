// Naomi Ifergan
// CART 451 - Term Project
// Title: The Land Of Eden: The Land Of A Billion Minds

// sources:
// background image: https://wallpaperaccess.com/futuristic-house


var textfield;
var output;
var submit;

function setup() {

noCanvas();
textfield = createInput("What would make the world a perfect place?");
//textfield.changed(newText);
textfield.input(newTyping);
output = select("#output");
submit = select("#submit");
submit.mousePressed(newText); //this allows users to click on submit to upload their entries on screen
}

function newTyping() {

  output.html(textfield.value()); 
  //createP(textfield.value()); //for every letter typed, it will appear on screen

}

function newText() {

  createP(textfield.value());

}
