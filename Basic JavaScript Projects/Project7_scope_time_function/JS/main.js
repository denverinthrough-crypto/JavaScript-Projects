function checkAge() {
  // Get user input
  let age = document.getElementById("userAge").value;
  let message = "";

  // If, Else If, and Else statements
  if (age >= 65) {
    message = "You are a senior citizen and eligible to vote!";
  } else if (age >= 18) {
    message = "You are an adult and eligible to vote!";
  } else if (age > 0) {
    message = "You are too young to vote!";
  } else {
    message = "Please enter a valid age.";
  }

  // Display message
  document.getElementById("result").innerHTML = message;
}
