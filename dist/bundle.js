(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let carnivores = [];
let herbivores = [];

const loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();
  
  loader.addEventListener("load", function() {
    // Set the value of the private array
    
    carnivores = JSON.parse(this.responseText);
    // Now execute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke(carnivores, "Carnivores");
  });

  loader.open("GET", "../Scripts/carnivores.json");  
  loader.send();
};
const loadHerbivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    herbivores = JSON.parse(this.responseText);

    // Now execute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke(herbivores, "Herbivores");
  });
  loader.open("GET", "../Scripts/herbivores.json");
  loader.send();
};
module.exports = { loadCarnivores, loadHerbivores };
},{}],2:[function(require,module,exports){
"use strict";
const modulefile = require("./module-xhr.js");

},{"./module-xhr.js":3}],3:[function(require,module,exports){
"use strict";
const animal = require("./animal");
const outputBox = document.getElementById("outputBox");
function displayAnimals(animal, name){
  let newNode = document.createElement("div");
  let newText = document.createTextNode(animal);
  let newHeader = document.createElement("h2");
  for (const key in animal) {
    if (animal.hasOwnProperty(key)) {
      const objKey = animal[key];
    }
  }
  let newHeaderText = document.createTextNode(animal.objKey[0]);
  newHeader.appendChild(newHeaderText);
  newNode.appendChild(newHeader);
  newNode.appendChild(newText);
  outputBox.appendChild(newNode);
}

function showCarnivores(carnivores) {
  // code that takes the carnivores array and displays it to the DOM
  displayAnimals(carnivores.carnivores, "Carnivores");
}

function showHerbivores(herbivores) {
  displayAnimals(herbivores.herbivores, "Herbivores");
}

animal.loadCarnivores(displayAnimals);
animal.loadHerbivores(showHerbivores);
},{"./animal":1}]},{},[2]);
