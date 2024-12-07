function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!",
    }
    var Animal = {
        Species: "Cat",
        Color: "Orange",
        Breed: "Tabby",
        Age: 6,
        Sound: "Meow",
    };
    //Deleting Sound before it is activated
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    //Clicking now results in Animal's (Cat) Age
    document.getElementById("Dictionary").innerHTML = Animal.Age;

}



