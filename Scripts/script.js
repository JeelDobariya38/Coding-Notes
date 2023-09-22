var preElements = document.querySelectorAll("pre");

// Loop through the selected elements and add the class
preElements.forEach(function(preElement) {
  preElement.classList.add("trimmer");
});