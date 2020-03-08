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

    clippedImg.setAttribute(
      "x",
      ((event.pageX * -1) / window.innerWidth) * 869
    );
    console.log(event.pageX);
    clippedImg.setAttribute(
      "y",
      (((event.pageY * -1) / window.innerHeight) * 869 * window.innerHeight) /
        window.innerWidth
    );
  }
}
