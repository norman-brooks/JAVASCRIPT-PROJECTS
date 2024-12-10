//Assignment Step 129
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Ternary Operators Challenge
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough " :
        "You qualify ";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Coding Assignment Step 134
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New Keyword Assigment Step 135 "New & This"
function Pet(name, breed, color) { //Pet is the Constructor
    this.name = name;
    this.breed = breed,
    this.color = color;
}

var firstPet = new Pet("Dolce", "American Pit Mix", "Blonde");
var secondPet = new Pet("Buddy", "Shepherd Mix", "Black w/ Streaks of Red & White");
function myPets() {
    document.getElementById("New_and_This").innerHTML =
        "My first dog's name was " + firstPet.name + ". She was an " +
        firstPet.breed + ".";
}

//Nested Functions Assignment Step 140
function add_Number(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_two() {Starting_point += 2;}
        Plus_two ();
        return Starting_point;
    }
}