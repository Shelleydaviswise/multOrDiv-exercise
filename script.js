// Exercise: Write a basic HTML / JavaScript program that does the following

// - In HTML, have a single text input field
// - In HTML , have a button
// - In JavaScript, have a function divides a number by 10
// - In JavaScript, have a function that multiplies a number by 5
// - When the button is clicked, call a JavaScript function that checks if the user has 
// entered in a value in the input field
// - If there is no value, put an appropriate message in an alert box telling the user to enter something
// - If there is a value, and its numeric value is greater than 10000, call a function that passes in the 
// user-entered value as an argument, and the name of the function that divides by 10.
// -If there is a value, and its numeric value is less than 10000, call a function that passes in the 
// user-entered value as an argument, and the name of the function that multiplies by 5. 
// Write the result of the calculation into the HTML document. (edited)


// Setting global variables
var userInput = document.getElementById("textField");
var numInput = parseInt(userInput);

var button = document.getElementById("calculate");

function getUserInput() {
  return numInput.value;

//Divide function
function divide(num){
   var quotient = num/10;
   return quotient;
   console.log("This is a quotient value " + quotient);
}

//Multiply function
function multiply(num){
	var product = num * 5;
	return product;
  console.log("This is the product value " + product);
}

function clearNum() {
  document.getElementById("textField").value = "";
}

//Starting the calculation
function calculate () {

  // if (numInput === "") {
  // 	alert("Type a number!");
  // }

}

 if (numInput > 10000){
  	var result = divide(numInput);
    console.log("This is a divide " + result);
  } 

  else if (numInput < 10000) {
     var result = multiply(numInput);
     console.log("This is a multiply " + result);
  }
  document.getElementById("answerOutput").innerHTML = result;
  
  clearNum();
}
  
button.onclick = calculate;


  