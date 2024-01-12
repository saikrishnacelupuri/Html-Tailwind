// Step 1: Get references to the input field and the submit button

const textInput = document.getElementById("inputname");
const finalBtn = document.getElementById("submitButton");
const outputHeading = document.getElementById("outputHeading");

const enteredText = textInput.value;

outputHeading.textContent = enteredText;

//function to do action on click
window.alert(textInput.value);
console.print(enteredText);
