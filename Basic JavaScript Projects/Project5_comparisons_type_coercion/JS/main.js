

      // Display a very large number that results in Infinity
    document.getElementById("positiveInfinity").innerHTML =
      "Large number result: " + (1.79e308 * 10);

    // Display a very large negative number that results in -Infinity
    document.getElementById("negativeInfinity").innerHTML =
      "Negative large number result: " + (-1.79e308 * 10);

    // Example variables
    let x = 10;
    let y = 5;

    // Greater than comparison (true)
    document.getElementById("trueResult").innerHTML =
      "Is x greater than y? " + (x > y);

    // Less than comparison (false)
    document.getElementById("falseResult").innerHTML =
      "Is x less than y? " + (x < y);

// Create a variable
    let age = 25;

    // Display the variable type using typeof
    document.write("The data type of age is: " + typeof age);

// 1️⃣ Display NaN
    let result = 0 / 0; // Dividing 0 by 0 results in NaN
    document.write("Result: " + result + "<br>");

    // 2️⃣ Use isNaN() to display true
    let test1 = "hello"; // a string that can't be converted to a number
    document.write("isNaN('hello'): " + isNaN(test1) + "<br>");

    // 3️⃣ Use isNaN() to display false
    let test2 = 123; // a number is NOT NaN
    document.write("isNaN(123): " + isNaN(test2));

console.log(6*6);

console.log(100>= 80);

console.log(10 == 10);   // This will return true
console.log(5 == 10);    // This will return false

// 1️⃣ Return true — same data type and same value
console.log(10 === 10);  // true (both are numbers and equal)

// 2️⃣ Return false — different data type and different value
console.log("5" === 10);  // false (string vs number, different values)

// 3️⃣ Return false — different data type but same value
console.log("10" === 10); // false (string vs number, same value but different type)

// 4️⃣ Return false — same data type but different value
console.log(20 === 10);   // false (both numbers but values differ)

// ----- AND Operator (&&) -----

// Returns true (both conditions are true)
console.log(10 > 5 && 8 < 20);  

// Returns false (one condition is false)
console.log(10 > 5 && 8 > 20);  


// ----- OR Operator (||) -----

// Returns true (one condition is true)
console.log(10 > 5 || 8 > 20);  

// Returns false (both conditions are false)
console.log(3 > 5 || 2 > 10);


// ----- NOT Operator (!) -----

// Returns false (because !true = false)
console.log(!true);

// Returns true (because !false = true)
console.log(!false);

// Another example with a condition:
console.log(!(10 > 5));  // false (since 10 > 5 is true, then !true = false)
console.log(!(3 > 5));   // true (since 3 > 5 is false, then !false = true)








 