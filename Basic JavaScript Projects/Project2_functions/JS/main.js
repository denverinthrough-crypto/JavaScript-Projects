// Function to assign variables and display them in a paragraph
function displayMessage() {
    // Step 1: Assign two variables
    let firstPart = "Hello, ";
    let secondPart = "welcome to JavaScript functions!";

    // Step 2: Combine the variables
    let fullMessage = firstPart + secondPart;

    // Step 3: Display the message in the paragraph using document.getElementById
    document.getElementById("output").textContent = fullMessage;
}


// Function to display a concatenated message
function showMessage() {
    // Step 1: Assign two string variables
    let part1 = "This is the first part of the message. ";
    let part2 = "And this is the second part.";

    // Step 2: Use += operator to concatenate
    part1 += part2; // part1 now contains both strings

    // Step 3: Display the concatenated string in the paragraph
    document.getElementById("message").textContent = part1;
}
