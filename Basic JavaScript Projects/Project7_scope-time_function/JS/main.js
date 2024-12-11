//Local and Global Variable Assignment

var x = 20;
function Add(){
    document.write(25 + x);
    console.log( 25 + x);
}

function Subtract(){
    var y = 15;
    document.write (25-y);
    console.log (25 -y);
}
var z = 5;
function Divisio(){ //Misspelled Division as forced error in 
    //console.log have screen shot of error in notes.
    document.write(25 / z);
    console.log (25 / z);
}

//Method Assignment & If Assisngnment
function get_Date(){
    if (new Date().getHours() < 18) 
        {document.getElementById("Greeting").innerHTML = "How are you today?"}
    if (new Date().getHours() < 12)
    {document.getElementById("Greeting").innerHTML = "How are you this morning?"}
    if(new Date().getHours() > 18)
    {document.getElementById("Greeting").innerHTML = "How are you this evening?"}
}

//Else Assignment
function Age_Function(){
    Age=document.getElementById("Age").value;
    if (Age >= 65) {
        Medicare = "You qualify for Medicare!";
    }
    else {
        Medicare = "You aren't old enought to qualify for Medicare.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Medicare;
}

// Else If Assignment Step 152
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}