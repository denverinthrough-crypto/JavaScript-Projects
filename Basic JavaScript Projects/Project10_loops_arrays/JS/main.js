function Call_Loop() {
    let i = 1; // Initialize counter
    let output = ""; // To store the loop result

    while (i <= 10) {
        output += i + "<br>"; // Add current number and line break
        i++; // Increment counter
    }

    document.getElementById("Loop").innerHTML = output; // Display in paragraph
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];

function for_Loop() {
    var Content = ""; // Reset content each time the function runs
    for (var Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_function () {
    let Players = [];
    Players [0] = "Kobe";
    Players [1] = "KG";
    Players [2] = "Dirk";
    Players [3] = "Tim";
    Players [4] = "Ai";
    document.getElementById("Array").innerHTML = "My favorite player is " + Players[0] + ".";

}

function constant_function () {
    const car = {
        type: "SUV",
        color: "red"
    };

    car.color = "blue";

    car.year = 2025

    document.getElementById("Constant").innerHTML = "The car color is now " + car.color + " and the model year is " + car.year + ".";
}

function let_function () {
    let x = 10;
    let y = 5;
    let sum = x + y;

    document.getElementById("Let").innerHTML = "The sum of x and y is " + sum + ".";
}

let rider = {
    height: "170cm",
    weight: "65kg",
    color: "brown",
    nationality: "Philippines",
    description : function () {
        return "I am " + rider.height + "," + "weighing " + rider.weight + " has a skin color of " + rider.color + "." + " And I am from " + rider.nationality + ".";
    }
};

document.getElementById("Cyclist").innerText = rider.description();