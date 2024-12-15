//Switch Statement Assignment
function Drummer_Function() {
    var Drummer_Output;
    var Drummers = document.getElementById("Drummer_Input").value;
    var Drummer_String = " is a great drummer!";
    var Drummer_String1 = " is an adequate drummer."
    switch (Drummers) {
        case "John Bonham":
            Drummer_Output = "John Bonham" + Drummer_String;
            break;
        case "Keith Moon":
            Drummer_Output = "Keith Moon" + Drummer_String;
            break;
        case "John Neil Peart":
             Drummer_Output = "Neil Peart" + Drummer_String;
             break;
         case "Ringo Starr":
            Drummer_Output = "Ringo Starr" + Drummer_String;
            break;
            case "Mick Fleetwood":
            Drummer_Output = "Mick Fleetwood" + Drummer_String;
            break;
            case "Ginger Baker":
            Drummer_Output = "Ginger Baker" + Drummer_String;
            break;
            case "Roger Taylor":
            Drummer_Output = "Roger Taylor" + Drummer_String1;
            break;
            default:
                Drummer_Output = "Please enter a drummer exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Drummer_Output;
}