"use strict";

console.log(getCleanName("ChrISTofFer"));

function getCleanName(name) {
  return name[0].toUpperCase() + name.substring(1, name.length).toLowerCase();
}
