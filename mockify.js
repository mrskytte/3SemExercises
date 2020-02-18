"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const originalText = "Convert original text to mockify";
  console.log(mockify(originalText));
}

function mockify(text) {
  const mockingText = splitText(text);
  return mockingText;
}

function splitText(text) {
  const splitText = text.split("");
  const mockingChar = randomCase(splitText);
  return mockingChar.join("");
}

function randomCase(chars) {
  const mockingText = [];
  for (let i = 0; i < chars.length; i++) {
    let randomNumber = Math.random() * 2;
    if (randomNumber > 1) {
      mockingText.push(chars[i].toUpperCase());
    } else {
      mockingText.push(chars[i].toLowerCase());
    }
  }
  return mockingText;
}
