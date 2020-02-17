"use strict";

function presentPets(name, animalType, animalName) {
  console.log(
    `My name is ${name}, I have a ${animalType} called ${animalName}`
  );
}

let test = "John";
let Bumbum = "cat";
let Nono = "Poppy";

presentPets(test, Bumbum, Nono);

presentPets("Chris", "dog", "Piper");

presentPets("Chris", Bumbum, Nono);

presentPets(Bumbum, Nono, test);
