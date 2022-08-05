// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if(!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list){
  return list [randomInt(list.length)]
}

function generatePassword() {

  while (true) {
    
    var userinput = window.prompt ("How long do you want your password to be?")

    // user exited prompt
    if (userinput === null){
      return
    }

  var passwordLength = parseInt (userinput)

  if (isNaN(passwordLength)){
    window.alert("That's not a number!")
  } else if (passwordLength <8 || passwordLength > 128){
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
  }  else {
    break 
    }
  
  }
  var userWantsNumbers = window.confirm ("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm ("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var NumberList = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
  var SymbolList = ("!", "@", "#", "$", "%", "^", "&", "*")
  var lowercaseLife = ("a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  var uppercaseLife = []

  var optionsCart = []

  for (var i = 0; i < lowercaseLife.length; i++){
    uppercaseLife[i] = lowercaseLife[i].toUpperCase()
  }

  if(userWantsNumbers === true){
   optionsCart.push(NumberList)
  }

  if(userWantsSymbols === true){
    optionsCart.push(SymbolList)
  }

  if(userWantsLowercase === true){
    optionsCart.push(lowercaseLife)
  }

  if(userWantsUppercase === true){
    optionsCart.push(uppercaseLife)
  }

  if(optionsCart.length === 0){
   optionsCart.push(lowercaseLife)
  }

  var generatePassword = ""

  for (var i = 0; i <passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

  if(password) {
    passwordText = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
