let carnivores = [];

loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);

    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
  });
};

module.exports = { loadCarnivores };