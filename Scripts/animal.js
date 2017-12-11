"use strict";


const loadAnimals = function(callbackToInvoke, someObject) {
  // create new xhr object
  const loader = new XMLHttpRequest();
  // assign it an event listener
  loader.addEventListener("load", function() {
    // Set the value of the private array
    // private array that is a parsed string from the json file
    let arrayOfValues = JSON.parse(this.responseText);
    // Now execute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument. 
    // the 'callbackToInvoke' ends up being 'displayAnimals' and the argument is the object
    callbackToInvoke(arrayOfValues);
  });

  loader.open("GET", `../Scripts/${someObject}.json`);  
  loader.send();
};

module.exports = { loadAnimals};