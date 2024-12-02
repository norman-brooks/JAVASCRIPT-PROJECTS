function displayDate() {
    var str = "This is the button text";
    document.getElementById("Button_Text").innerHTML = Date();
}

function myFunction(a, b) {
    //function returns the product of a and b
    return a * b;
}

let result = myFunction(4, 3);
document.getElementById('x').innerHTML=result;