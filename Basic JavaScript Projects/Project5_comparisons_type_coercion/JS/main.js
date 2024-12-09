var A= "All work and no play makes Jack a dull boy. <br><br>";

document.write(A);

document.write(5 >= 5);
document.write("<br><br>");
document.write("10" + 5);
document.write("<br><br>");
document.write (0 / 0);
document.write("<br>");
function NaNtest(){
    document.getElementById("Test").innerHTML = 0/0
}
function Test2(){
    document.getElementById("Test2").innerHTML = isNaN('Boxcar Bertha');}
document.write("<br><br>");
document.write (1.8E309);
document.write("<br><br>");
document.write (-2E311);
document.write("<br><br>");
document.write(100 > 10);
document.write("<br><br>");
document.write(100 > 12);
document.write("<br><br>");
function Logic(){
    document.getElementById("Bool").innerHTML = Boolean(6 >= 4 && 3 <= 3);
}

console.log(2 + 2)