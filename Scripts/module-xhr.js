"use strict";
const animal = require("./animal");
const outputBox = document.getElementById("outputBox");
function displayAnimals(animal, name){
  let newNode = document.createElement("div");
  let newText = document.createTextNode(animal);
  let newHeader = document.createElement("h2");
  let newHeaderText = document.createTextNode(name);
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

animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);