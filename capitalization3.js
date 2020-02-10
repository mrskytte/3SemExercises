"use strict";

let name = "Joanathan";

console.log(name.toLowerCase());
name = name.toLowerCase();

console.log(
  name.substring(0, 2) + name[2].toUpperCase() + name.substring(3, name.length)
);
