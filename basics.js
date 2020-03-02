"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";
const len = name.length;
// console.log(name);

// console.log(`The lenght of the name is ${len}`);
// console.log(`The second indexed character is ${name[2]}`);
// console.log(`The sixth indexed character is ${name[6]}`);
// console.log(`The D is number ${name.indexOf("D")}`);
// console.log(`The last e in Dumbledore is index number ${len - 1}`);

// console.log(name.endsWith("Dumbledore", len));

// let person1 = {
//   firstName: "Peter",
//   age: 29,
//   student: false
// };

// let person2 = {
//   firstName: "Other Peter",
//   age: 28,
//   student: false
// };

// let person3 = person1;

// let math = undefined + 1;

// console.log(math);

// setInterval(randomBackground, 500);

// function randomBackground() {
//   const rgb = randomColor();
//   changeBackground(rgb);
// }

// function getColorString(red, green, blue) {
//   return `rgb(${red}, ${green}, ${blue})`;
// }

// function randomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return getColorString(r, g, b);
// }

// function changeBackground(rgb) {
//   document.querySelector("body").style.backgroundColor = rgb;
//   document.querySelector("body").style.transition = "all 4s";
// }
// function redAlert() {
//   console.log("Red Alert!");
// }

// function blueMessage() {
//   console.log("We're all soo sad");
// }

// function log(type) {
//   type();
// }

// log(redAlert)
// log(blueMessage);

const array = Promise.all([
  fetch("//petlatkea.dk/2020/hogwarts/students.json"),
  fetch("//petlatkea.dk/2020/hogwarts/families.json")
])
  .then(function(responses) {
    // Get a JSON object from each of the responses
    return responses.map(response => response.json());
  })
  .then(function(data) {
    // Log the data to the console
    // You would do something with both sets of data here
    console.log(data);
    data.forEach(showData);
  });

function showData(oneData) {
  console.log(oneData);
}
