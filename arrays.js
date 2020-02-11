"use strict";
// Create an array
let people = ["Harry", "Hermoine", "Draco", "Ron"];
let result;

// Exercise test - see what happens
result = people.push("Sirius");
result = people.pop();
result = people.push("Neville");
result = people.push("Luna");
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
result = people.push("Fred", "George");
result = people.indexOf("Fred");
result = people.splice(result, 1);

console.log(people);
console.log(result);

// Get a specific element - e.g. the 5th
console.log(`The fifth element in the array is ${people[4]}`);

// Add to an array from the beginning
result = people.unshift("The Philosopher's Stone");
console.log(people + " : is the array with something added in the beginning");

// ... from the end
result = people.push("The Deadly Hollows");
console.log(people + " : is the array with something added in the end");

// ... or anywhere
result = people.splice(2, 0, "The Prisoner of Azkeban");
console.log(people + " : is the array with something added anywhere");

// Remove from an array from the beginning
result = people.shift();
console.log(people + " : is the array with something removed in the beginning");

// ... from the end
result = people.pop();
console.log(people + " : is the array with something removed in the end");

// ... or anywhere
result = people.splice(4, 1, "Malfoy");
console.log(people + " : is the array with something removed anywhere");

// Convert to string
result = people.toString();
console.log("Not it's a string below");
console.log(result);

// ... or
result = people.join(", ");
console.log("Now it's a string divided by a space and a comma below");
console.log(result);

// Convert back to array
result = result.split(", ");
console.log("Now it's back to an array");
console.log(result);

// Do something with each element of an array
result.forEach(e => {
  console.log(e);
});

// Find a specific element - e.g. Ron
result = people.indexOf("Ron");
console.log(`Ron is number ${result} on the list`);

console.clear();

// What's the diffence
const str = "absjsjdlds";
const arr1 = str.split();
console.log("Below is the split() result");
console.log(arr1);
const arr2 = Array.from(str);
console.log("Below is the .from() result");
console.log(arr2);
