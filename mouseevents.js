"use strict";

const circle = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImg = document.querySelector("#clipped-image");
const svg = document.querySelector("svg");

const circles = document.querySelectorAll(".circle");

svg.addEventListener("mousedown", activateMove);

function activateMove() {
  event.preventDefault();
  svg.addEventListener("mousemove", movingMouse);
  window.addEventListener("mouseup", () =>
    svg.removeEventListener("mousemove", movingMouse)
  );
  function movingMouse() {
    clipCircle.setAttribute("cx", (event.pageX / window.innerWidth) * 1000);
    clipCircle.setAttribute(
      "cy",
      (event.pageY / window.innerHeight) *
        1000 *
        (window.innerHeight / window.innerWidth)
    );
    circle.setAttribute("cx", (event.pageX / window.innerWidth) * 1000);
    circle.setAttribute(
      "cy",
      (event.pageY / window.innerHeight) *
        1000 *
        (window.innerHeight / window.innerWidth)
    );
    clippedImg.setAttribute("x", 400 - event.pageX * 0.5);
    console.log(clippedImg.attributes);
    clippedImg.setAttribute("y", 200 - event.pageY * 0.5);
  }
}
