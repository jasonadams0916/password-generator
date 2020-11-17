// Assignment code here
function generatePassword (){
  var passlength = prompt("Please select Password Length between 8 and 128 characters.")
  while(passlength < 8 || passlength > 128 || isNaN(passlength)){
    console.log(passlength)
    passlength = prompt("Um....no....please select a value between 8 and 128.")
  if(passlength == null)
    return "Fine. I didn't want to help anyway."
  }
  var specialChar = promptUser("Include special characters? \nYes or No?")
  var upperCase = promptUser("Include Upper Case?")
  var numbers = promptUser("Numbers?")
  
  var passcode = [] 
  var special = "!@#$%^&*~"
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var num = '1234567890'
  var lists = [letters.toLowerCase()]

  var maxChoices = 1

  if (specialChar === true){
    maxChoices++ 
    lists.push(special)
  }

  if (upperCase === true){
    maxChoices++
    lists.push(letters)
  }

  if (numbers === true){
    maxChoices++
    lists.push(num)
  }
  // show what list is being used
  var specialUsed = false;
  var numUsed = false;
  var lowerUsed = false;
  var upperUsed = false;


  while ((specialUsed === false && specialChar === true) || 
    (numUsed === false && numbers === true) ||
    (lowerUsed === false) ||
    (upperUsed === false && upperCase === true)){ 
      console.log('generatingpassword')
    passcode = [];
    for(var i = 0; i < passlength; i++){
      var choice = Math.floor(Math.random() * maxChoices); 
      var listUsed = lists[choice]
      if (listUsed === special){
        specialUsed = true;
      } 

      if (listUsed === num){
        numUsed = true;
      } 

      if (listUsed === letters.toLowerCase()){
        lowerUsed = true;
      } 

      if (listUsed === letters){
        upperUsed = true;
      } 
      var random = Math.floor(Math.random() * listUsed.length); // 0 - length    
      passcode.push(listUsed[random]);
    }
  }
  return passcode.join('').toString();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function promptUser(promptMessage){
  var answer = prompt(promptMessage)
  var correctAnswers = ["y","n","yes","no"];
  var valid = false;
  var promptAnswer = null
  while(!valid){
    for(var i = 0; i < correctAnswers.length; i++){
      if(answer.toLowerCase() === correctAnswers [i]){
        if(answer.toLowerCase() === "yes" || answer.toLowerCase() == "y"){
          // save the value that we do want special characters //
          promptAnswer = true;
        }
        else if(answer[0].toLowerCase() == 'n'){ 
        }
        valid = true;
      }
    }
  }

  return promptAnswer
}


function buildPassword(){
 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
