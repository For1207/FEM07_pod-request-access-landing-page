function checkEmail () {
  const userInput = document.getElementById('email').value;
  // Prevents the form's default behavior and fills the form with the user input
  document.getElementById('email').value = userInput;
  const emailCheckResult = document.getElementById('email-result');
  const emLen = userInput.length;
  let symbolFlag = 0;
  // This loop check the user input for symbol '@', if found, breaks the loop
  for (let i = 0; i < emLen; i++) {
    if(userInput[i] === "@") {
      symbolFlag = 1;
      break;
    }
  }
  // If symbol '@' was not found in the user input, the flag value is 0 and the alert 
  //message is displayed on the page
  if (symbolFlag === 1) {
    emailCheckResult.innerHTML = "&nbsp;"
  } else {
    emailCheckResult.innerHTML = "Oops! Please check your email";
  }
}