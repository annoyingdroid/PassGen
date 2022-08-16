// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passLength, charTypes;

  passLength = prompt("Enter the desired password length (8-128)", 8);
  charTypes = prompt("Choose at least one or more character types to include. \n 1 - Lowercase, 2 - Uppercase, 3 - Numeric, 4 - Special Characters");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
