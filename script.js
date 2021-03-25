// Assignment Code
var generateBtn = document.querySelector("#generate");


//a function to generate a password based on user input of length and character sets
function generatePassword() {
  //Declare variables
  let validLength = false;
  let validCharSet = false;
  let pwordLength;
  let useUppers;
  let useLowers;
  let useNumbers;
  let useSpecial;

  //create the arrays for the charctersets
  let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let special = ['~', ':', "'", '+', '[', '\\', '@', '^', '{', '%', '(', '-', '"', '*', '|', ',', '&', '<', '`', '}', '.', '_', '=', ']', '!', '>', ';', '?', '#', '$', ')', '/'];

  //keep looping until the user cancels or enters a valid number between 8 - 128
  while (!validLength) {
    pwordLength = parseInt(prompt("Your pasword must be at least 8 characters in length and no loner than 128 characters.\n\rHow long would you like your password to be?"))
    //check for valid number and length of entry
    if (pwordLength >= 8 && pwordLength <= 128) {
      validLength = true;
      //loop through code until the user selects at least one of the valid chacter sets
      while (!validCharSet) {
        alert("You must select at least one character set to use for your password.")
        useUppers = confirm("Would you like to use UPPER case letters?")
        useLowers = confirm("Would you like to use LOWER case letters?")
        useNumbers = confirm("Would you like to use NUMBERS?")
        useSpecial = confirm("Would you like to use SPECIAL characters?")
        //Once a valid character set is selected, end the loop
        if (useUppers || useLowers || useNumbers || useSpecial) {
          validCharSet = true;
        }
      }

      //create the array of character sets based on user input, intitilize the password and pwCharacterSets array
      let pwCharactersSets = [];
      password = "";

      //check the values from the confim statments above and build the character set array based on user input.
      useUppers ? pwCharactersSets = pwCharactersSets.concat(upper) : null;
      useLowers ? pwCharactersSets = pwCharactersSets.concat(lower) : null;
      useNumbers ? pwCharactersSets = pwCharactersSets.concat(numbers) : null;
      useSpecial ? pwCharactersSets = pwCharactersSets.concat(special) : null;

      // Loop through the character sets to obtain a random character for each number in the password length
      for (let i = 0; i < pwordLength; i++) {
        password = password + (pwCharactersSets[Math.floor(Math.random() * pwCharactersSets.length)]);
      }
      return password;
    }
    else if (!pwordLength) {
      validLength = true;
      return "User canceled operation.";
    }
  }
} // End generatePassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
