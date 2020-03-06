"use strict";
window.addEventListener("DOMContentLoaded", fetchTiger);

function fetchTiger() {
  fetch("exercise_assets/tiger.svg")
    .then(e => e.text())
    .then(displayTiger);
}

function displayTiger(tigerSVG) {
  let tiger = document.querySelector("section");
  tiger.innerHTML = tigerSVG;

  const eyeArray = [];
  eyeArray.push(findEyeElements("#path304"));
  eyeArray.push(findEyeElements("#path308"));
  eyeArray.push(findEyeElements("#path352"));
  eyeArray.push(findEyeElements("#path476"));

  function findEyeElements(id) {
    return document.querySelector(id);
  }

  eyeArray.forEach(eyeElement =>
    eyeElement.addEventListener("click", addEyeColor)
  );
  let counter = 0;
  function addEyeColor(evt) {
    console.log(evt);
    const newEyeColor = counter === 0 ? "red" : "#99cc32";
    eyeArray.forEach(() => tiger.style.setProperty("--eye-color", newEyeColor));
    counter = counter === 1 ? 0 : 1;
  }

  console.log(eyeArray);

  document
    .querySelectorAll("g")
    .forEach(e => e.addEventListener("mouseover", changeColor));
  document;

  function changeColor() {
    let gElement = event.target;
    if (eyeArray) gElement.style.transition = "all 2s";
    gElement.style.fill = "black";
  }
}
