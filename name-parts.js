"use strict";

let name = "Albus Percival Wulfric Brian Dumbledore";

const firstName = name.substring(0, name.indexOf(" "));
const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
const lastName = name.substring(name.lastIndexOf(" ") + 1, name.length);

console.log(name.indexOf(" "));
console.log(name.lastIndexOf(" "));
console.log(name.substring(0, name.indexOf(" ")));
console.log(name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" ")));
console.log(name.substring(name.lastIndexOf(" ") + 1, name.length));

console.log(`${firstName} ${middleName} ${lastName}`);

console.log(name.indexOf(" ", [name.indexOf(" ") + 1]));
