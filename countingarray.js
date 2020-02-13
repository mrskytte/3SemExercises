"use strict";

// Make a program that counts (with a timed delay)
const array = [];
let counter = 0;
// setInterval(addCountFromBack, 200);
function addCountFromBack() {
  array.push(counter);
  counter++;
  console.log(array);
}
// Modify the program to insert the counter in the beginning of the array

// setInterval(addCountFromFront, 200);
function addCountFromFront() {
  array.unshift(counter);
  counter++;
  console.log(array);
}
// Modify the program again, to make sure the array doesn’t get longer than nine items.

setInterval(keepArrayAtNine, 200);
function keepArrayAtNine() {
  array.unshift(counter);
  counter++;
  if (array.length == 10) {
    array.pop();
    console.log(array);
  }
}
