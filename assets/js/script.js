// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Password generation function
function generatePassword() {
  var lengthCheck = false;
  var charTypeCheck = false;

  while(!(lengthCheck && charTypeCheck)){
    var passLength = prompt("Enter the desired password length (8-128)", 8);
    var upperInclude = prompt("Include Uppercase characters? Y/N").toUpperCase();
    var lowerInclude = prompt("Include Lowercase characters? Y/N").toUpperCase();
    var numInclude = prompt("Include Numbers? Y/N").toUpperCase();
    var specInclude = prompt("Include Special characters? Y/N").toUpperCase();

    if(passLength != "") {lengthCheck = true}
    if(upperInclude != ("" || "N")) {charTypeCheck = true}
    if(lowerInclude != ("" || "N")) {charTypeCheck = true}
    if(numInclude != ("" || "N")) {charTypeCheck = true}
    if(specInclude != ("" || "N")) {charTypeCheck = true}
  }
  
  var passHolder = "";
  var chars = "";

  if(upperInclude == "Y"){
    chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowerInclude == "Y"){
    chars+="abcdefghijklmnopqrstuvwxyz"
  }
  if(numInclude == "Y"){
    chars+="0123456789"
  }
  if(specInclude == "Y"){
    chars+="!@#$%^&*()"
  }

  for(var i = 0; i<passLength; i++){
    var charVal = Math.round(Math.random() * chars.length);
    passHolder+=chars[charVal];
  }
  return passHolder;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
