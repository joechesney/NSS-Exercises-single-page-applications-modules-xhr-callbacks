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