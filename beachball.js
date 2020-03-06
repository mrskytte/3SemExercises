"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("beachball.svg")
    .then(response => response.text())
    .then(svg => (document.querySelector("").innerHTML = svg));
}
