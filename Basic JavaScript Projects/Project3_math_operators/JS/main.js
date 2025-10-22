function showMath() {
      let x = 5;
      let y = 10;
      let result = x + y;
      document.getElementById("Math").innerText = "The result is: " + result;


    }

function subtractNumbers() {
        let a = 15;
        let b = 7;
        let result = a - b;
        document.getElementById("Math").innerText = "The result is: " + result;
}

function calculate() {
  let x = 12;
  let y = 4;

  let multiplication = x * y;
  let division = x / y;

  document.getElementById("Math").innerText =
    "Multiplication: " + multiplication + " | Division: " + division;
}

function doMath() {
  let a = 20;
  let b = 5;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;

  // Display all results
  document.getElementById("Math").innerText =
    "Addition: " + addition +
    " | Subtraction: " + subtraction +
    " | Multiplication: " + multiplication +
    " | Division: " + division;
}

function showModulus() {
  let a = 17;
  let b = 5;

  let result = a % b; // Modulus gives the remainder of a ÷ b

  document.getElementById("Math").innerText =
    "The modulus (remainder) of " + a + " ÷ " + b + " is: " + result;
}

function showNegation() {
  let number = 10;
  let negatedNumber = -number; // Negation operator changes the sign

  document.getElementById("Math").innerText =
    "Original number: " + number + " | After negation: " + negatedNumber;
}

function showCount() {
  let number = 10;

  let incremented = ++number; // Increment operator increases by 1
  let decremented = --number; // Decrement operator decreases by 1

  document.getElementById("Math").innerText =
    "After increment: " + incremented + " | After decrement: " + decremented;
}

function showRandom() {
  // Math.random() generates a number between 0 and 1
  let randomNumber = Math.random();

  document.getElementById("Math").innerText =
    "Here is a random number: " + randomNumber;
}


