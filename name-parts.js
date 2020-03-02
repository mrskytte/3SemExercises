"use strict";
window.addEventListener("DOMContentLoaded", init);

// let name = "alBus pErcIval wuLfric BrIan DumbleDore";

// const firstName = name.substring(0, name.indexOf(" "));
// const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
// const lastName = name.substring(name.lastIndexOf(" ") + 1, name.length);

// console.log(name.indexOf(" "));
// console.log(name.lastIndexOf(" "));
// console.log(name.substring(0, name.indexOf(" ")));
// console.log(name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" ")));
// console.log(name.substring(name.lastIndexOf(" ") + 1, name.length));

// console.log(`${firstName} ${middleName} ${lastName}`);

// console.log(name.indexOf(" ", [name.indexOf(" ") + 1]));

function init() {
  const fullName = "satish SigGi Von holsTeIn rathLOu";
  console.log(getSplitName(fullName));
}

function getSplitName(name) {
  const capitalizedName = getCapitalizedName(name);
  const firstName = capitalizedName[0];
  const lastName = capitalizedName[capitalizedName.length - 1];
  let middleNames = capitalizedName.splice(1, capitalizedName.length - 2);
  middleNames = middleNames.join(" ");

  const fullName = {
    firstName: firstName,
    middleNames: middleNames,
    lastName: lastName
  };
  return fullName;
}

function getCapitalizedName(fullName) {
  const names = fullName.split(" ");
  return capitalizeEachName(names);
}

function capitalizeEachName(names) {
  let capitalizedName = [];
  for (let i = 0; i < names.length; i++) {
    capitalizedName.push(capitalize(names[i]));
  }
  return capitalizedName;
}

function capitalize(name) {
  return name[0].toUpperCase() + name.substring(1, name.length).toLowerCase();
}
