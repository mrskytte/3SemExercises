"use strict";

const circle = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImg = document.querySelector("#clipped-image");
const svg = document.querySelector("svg");

const circles = document.querySelectorAll(".circle");

svg.addEventListener("mousedown", activateMove);

function activateMove() {
  event.preventDefault();
  movingMouse();
  showCircles();
  document.querySelector("svg").style.setProperty("--cursor", "crosshair");

  svg.addEventListener("mousemove", movingMouse);
  window.addEventListener("mouseup", mouseUp);
}

function movingMouse() {
  clipCircle.setAttribute("cx", (event.pageX / window.innerWidth) * 869);
  clipCircle.setAttribute(
    "cy",
    (event.pageY / window.innerHeight) *
      869 *
      (window.innerHeight / window.innerWidth)
  );
  circle.setAttribute("cx", (event.pageX / window.innerWidth) * 869);
  circle.setAttribute(
    "cy",
    ((event.pageY / window.innerHeight) * 869 * window.innerHeight) /
      window.innerWidth
  );
  clippedImg.setAttribute("x", ((event.pageX * -1) / window.innerWidth) * 869);
  console.log(event.pageX);
  clippedImg.setAttribute(
    "y",
    (((event.pageY * -1) / window.innerHeight) * 869 * window.innerHeight) /
      window.innerWidth
  );
}

function mouseUp() {
  svg.removeEventListener("mousemove", movingMouse);
  document.querySelector("svg").style.setProperty("--cursor", "zoom-in");
  hideCircles();
}

function showCircles() {
  document.querySelector("#circle").classList.remove("hide");
  document.querySelector("#clipcircle").classList.remove("hide");
}

function hideCircles() {
  document.querySelector("#circle").classList.add("hide");
  document.querySelector("#clipcircle").classList.add("hide");
}
