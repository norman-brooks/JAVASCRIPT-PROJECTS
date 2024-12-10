var A= "All work and no play makes Jack a dull boy. <br><br>";

document.write(A);

document.write(5 >= 5);
document.write("<br><br>");

document.write("10" + 5);
document.write("<br><br>");

//Nan Assignments
document.write (0 / 0);
document.write("<br>");

function NaNtest(){
    document.getElementById("Test").innerHTML = 0/0
}
function Test2(){
    document.getElementById("Test2").innerHTML = isNaN('Boxcar Bertha');}
document.write("<br><br>");
//Infinity Assignments
document.write (1.8E309);
document.write("<br><br>");

document.write (-2E311);
document.write("<br><br>");


document.write(100 > 10);
document.write("<br><br>");
document.write(100 > 12);
document.write("<br><br>");
//Console log assignment & Boolean Challenge on step 118
function Logic(){
    document.getElementById("Bool").innerHTML = Boolean (console.log(6 >= 7 && 3 <= 3));
    
}
//Console.Log Assignment on step 117
console.log (6 * 8);
document.write("<br><br>");
//Double Equal Signs Assignment
document.write(9==8);
document.write("<br><br>");
document.write(65==65);
document.write("<br><br>");
//Triple Equal Signs Assignment
X=25;
Y=25;
document.write(X===Y)
document.write("<br><br>");

x="12";
y="Nicholas Brooks";
document.write(x===y);
document.write("<br><br>");

x=12;
y="12";
document.write(x===y);
document.write("<br><br>");

x=12;
y=11;
document.write(x===y);
document.write("<br><br>");

//Not Operator Assignment
function not_func(){
    document.getElementById("NOT").innerHTML = !(25>1);
}

function no_func(){
    document.getElementById("not").innerHTML = !(1>25);
}

//Expression combining a string and a number
var A= "Hello, you are number ";
num = 6;
document.write(A + num);