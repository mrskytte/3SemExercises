"use strict";

let firstName = "Chris";
let lastName = "Skytte";

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

sayHello();

sayHello(lastName, firstName);
