//Two Functions below are for Math Object Challenge
function piDemo() {
    document.getElementById("piDemo").innerHTML = Math.PI;
}
function sqrtDemo() {
    document.getElementById('sqrtDemo').innerHTML = Math.sqrt(81);
}

//Addition for Step 96 # 1
function add() {
    var addition = 3 + 10;
    document.getElementById("Add").innerHTML = "3 + 10 = " + addition;
}
//Subtraction for Step 96 # 1
function subtract() {
    var subtraction = 100 - 31;
    document.getElementById("Sub").innerHTML = "100 - 31 = " + subtraction;
}
//Division
function divide() {
    var simple_Math = 100 / 10;
    document.getElementById("Div").innerHTML = "100 / 10 = " + simple_Math;
}
//Multiplication for Step 96 # 1
function multiply() {
    var simple_Math = 10 * 10;
    document.getElementById("Mult").innerHTML = "10 * 10 = " + simple_Math;
}
//Modulus Operator for Step 96 # 1
function modulus_Operator() {
    var simple_Math = 97 % 11;
    document.getElementById("Modulus").innerHTML =
        "When you divide 97 by 11 you have a remainder of: " + simple_Math;
}
//Increment for Step 96 #1
function increment() {
    var Z = 20;
    Z++;
    document.write(Z);
}
//Decrement for Step 96 #1
function decrement() {
    var X = 30;
    X--;
    document.write(X);
}
//Step 96 # 2
document.getElementById("roll").onclick = function(){
let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

document.getElementById("xlabel").innerHTML = x;
document.getElementById("ylabel").innerHTML = y;
document.getElementById("zlabel").innerHTML = z;
}


