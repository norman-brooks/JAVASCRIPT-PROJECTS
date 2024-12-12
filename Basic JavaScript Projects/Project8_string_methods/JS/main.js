//Concat Method Assignment
function full_sentence() {
    var part_1 = "We were somewhere ";
    var part_2 = "around Barstow on the ";
    var part_3 = "edge of the desert when ";
    var part_4 = "the drugs began to take hold.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("sentence").innerHTML = whole_sentence;



}
//Slice Method () Assignment
function slice_method() {
    var Sentence = "All work and no play makes Jack a dull boy";
    var Section = Sentence.slice(27, 31);
    document.getElementById("slice").innerHTML = Section;
}
//toUpperCase Method
function Sentence() {
    var str = "It's 10 o'clock, do you know where your children are?";
    var string = str.toUpperCase();
    document.getElementById("upper").innerHTML = string;

}

//Search() Method

let string = "Diving for Dollars";

let re1 = /D/;
let re2 = /g/;
let re3 = /s/;

console.log(string.search(re1));
console.log(string.search(re2));
console.log(string.search(re3));

//Numbers Method/toString

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}
//toPrecision() Method Assignment
function precision_Method() {
    var x = 1666.98724590132;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

function toFixed() {

    let num = 7.52413;
    let n = num.toFixed();

    document.getElementById("demo").innerHTML = n;
}