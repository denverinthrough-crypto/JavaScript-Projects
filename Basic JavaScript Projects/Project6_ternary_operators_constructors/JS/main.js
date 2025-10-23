function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Vote_Function(){
    let Age, Approval;
    Age = document.getElementById("Age").value;
    Approval = (Age < 18) ? "You are not old enough to vote" : "You can vote";
    document.getElementById("Vote").innerHTML = Approval + " Thank You!.";


}

function Vehicle (Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
document.getElementById ("Keywords_and_Constructors").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;

}


function Rider (Height, Weight, Age, Type_of_Rider) {
    this.Rider_Height = Height;
    this.Rider_Weight = Weight;
    this.Rider_Age = Age;
    this.Rider_TypeRider = Type_of_Rider;
}
 var Jonas = new Rider("175m", "58kg", 28, "Climber");
 var Wout = new Rider("190m", "78kg", 31, "OneDayRaces");
 var Kuss = new Rider("182m", "61kg", 31, "Domestique");
 function tourDeFrance() {
    document.getElementById ("Keywords_and_Constructors").innerHTML = "Wout is in the Tour de France Squad " + Wout.Rider_TypeRider;

 }


 // Outer function
function outerFunction() {

  // Nested (inner) function
  function innerFunction() {
    return "Hello! This message is from a nested function.";
  }

  // Call inner function and return its value
  return innerFunction();
}

// Use document.getElementById to display the result on the webpage
document.getElementById("message").innerHTML = outerFunction();
