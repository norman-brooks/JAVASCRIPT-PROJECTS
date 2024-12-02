//Button to display the date and time
function displayDate() {
    var str = "This is the button text";
    document.getElementById("Button_Text").innerHTML = Date();
}
//Used to change the color of the font on "x"
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('x').style.color = 'green';
});

//Operations function to join sentences when clicked
function myFunction(){
    var sentence="I have been a student of The Tech Academy";
    sentence += " since August of 2024";
    document.getElementById("Concatenate").innerHTML = sentence;
}

