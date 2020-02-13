"use strict";

// Count from 0 to 9

for (let counter = 0; counter < 10; counter++) {
  console.log(`The first console.log ${counter}`);
}

// Count from 1 to 10
for (let counter = 1; counter < 11; counter++) {
  console.log(`The second console.log ${counter}`);
}

// Count from 10 to 0, end with liftoff
for (let counter = 10; counter >= 0; counter--) {
  console.log(`The third console.log ${counter}`);
}
console.log("Lift Off!!");

// Count from 1 to 19, only odd numbers
for (let counter = 1; counter < 20; counter = counter + 2) {
  console.log(`The fourth console.log ${counter}`);
}

// Count from 1 to 16777216, doubling each count
for (let counter = 1; counter < 16777217; counter = (counter += counter) * 2) {
  console.log(`The fifth console.log ${counter}`);
}

// Count from 111 to 138, in steps of 3
for (let counter = 111; counter < 139; counter += 3) {
  console.log(`The sixth console.log ${counter}`);
}

// Count from 100 to 0, in steps of 10
for (let counter = 100; counter >= 0; counter -= 10) {
  console.log(`The seventh console.log ${counter}`);
}
