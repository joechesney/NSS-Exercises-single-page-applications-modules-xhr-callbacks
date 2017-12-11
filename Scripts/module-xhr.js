"use strict";
// requires the animal file for the 'loadAnimals' function
const animal = require("./animal"); 
// get the output element from the DOM
const outputBox = document.getElementById("outputBox");

// This function creates a new DOM element to store the output of the object, then grabs the property key, adds it to a heading element, then iterates over the values in the array and adds them to a div, then appends the heading and the value div to the output div. I designed it to work with any json file that has just one property thats an array. 
function displayAnimals(animal){
  let newNode = document.createElement("div"); // new element

  // all the heading stuff, with the key
  let newHeader = document.createElement("h2"); // create heading
  var objKeys = Object.keys(animal); // array of the object keys
  let keyName = objKeys[0]; // Since my object only has one property, I can just use the 0 index to grab the key of the property as a string so i can use it as a variable later
  let newHeaderText = document.createTextNode(cap(objKeys[0]));// This holds the key and places it in a text node, I also made a quick function that capitalizes the first letter of a string.
  newHeader.appendChild(newHeaderText); // appends the text
  newNode.appendChild(newHeader); // appends the heading to the output element
  
  // join the values of the property and add them to the DOM
  let values = animal[keyName].join(", "); // This makes a single string out of the array elements. i used the property key as a string variable here, with bracket notation
  let newText = document.createTextNode(values);
  newNode.appendChild(newText);
  outputBox.appendChild(newNode); // appends it to the output element
}



//capitalize first letter
function cap(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export is turned into a function that runs the other functions because otherwise I would have to require all of the other files in the 'main.js' file. 
module.exports.printToDom = function() {
  animal.loadAnimals(displayAnimals, "carnivores");
  animal.loadAnimals(displayAnimals, "herbivores");
};
