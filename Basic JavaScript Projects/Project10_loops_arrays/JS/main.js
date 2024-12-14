// While Loop Assignment & Break in Loop Assignment Step 225
function Call_Loop(){
    var Digit = "";
    var X = 1;
    while (X < 16) {
        if (X === 8) {
            break;
    } 
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//Length Property Challenge
function Length_Prop(){
let text = "I can't believe it's not Butter!";
let length = text.length;
document.getElementById("Length").innerHTML = length;
}

//For Loop Assignment
var Instruments = ["Bass", "Drums", "Guitar", "Piano", "Vocals"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Document.getElementById().innerHTML Assignment
function array_Function(){
    var Fav_Movies = [];
    Fav_Movies[0] = "Back to the Future";
    Fav_Movies[1] = "The Godfather";
    Fav_Movies[2] = "Goodfellas";
    Fav_Movies[3] = "Avengers: Endgame";
    Fav_Movies[4] = "Rocky";
    document.getElementById("Array").innerHTML = "One of my favorite movies is " +
        Fav_Movies[1] + ".";
}
//Const Keyword Assignment
function const_function(){
    const Musical_Instrument = {type:"Bass ", brand:"Fender ", make:"Jazz ", color:"Texas Tea "};
    Musical_Instrument.price ="$1,850";
    Musical_Instrument.alt_color="Cobalt Blue";
    Musical_Instrument.alt_price="$2,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color  + 
    Musical_Instrument.brand + Musical_Instrument.make + Musical_Instrument.type + "was " 
    + Musical_Instrument.price + ".<br>" + "I have seen the " + Musical_Instrument.alt_color + " go for over " + Musical_Instrument.alt_price + ".";
}

//Let Keyword Assignment
let x = 1;
if (x === 1) {
    let x = 2;
}
console.log(x);

//Return Statement Challenge
let Z = myFunction(12, 4); 
document.getElementById("return").innerHTML = Z;

function myFunction(a, b) {
  return a * b;   
}

//Object Assignment
let comic_book= {
    Title: "Amazing Spider-Man",
    Issue: " 3",
    Publication: 1963,
    Significance: "first appearance of Dr Octopus",
    description: function(){
        return "The comic book we're talking about is " + this.Title +
        this.Issue + " published way back in " + this.Publication + ". " 
        + "This issue features the " + this.Significance + ".";
        }
};
document.getElementById("comic").innerHTML = comic_book.description();

// Break & Continue Challenge
const guitars = ["Fender", "Music Man", "Rickenbacker", "Breedlove"];
let text = "";

list: {
    text += guitars[0] + "<br>"; 
    text += guitars[1] + "<br>"; 
    break list;
    text += guitars[2] + "<br>"; 
    text += guitars[3] + "<br>"; 
  }
document.getElementById("loop_break").innerHTML = text;

//Continue Challenge in Loop step 225
let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) { continue; }
  text1 = text1 + i;
  console.log(text1);
}
document.getElementById("demo").innerHTML = text1;
