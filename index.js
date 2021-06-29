function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Create an object

var modalObject = {
  name           : "Elmar",
  description    : "Abdulkarimov",
  featuredImage  :  50,
  technologies   : "blue",
  linkVersion    : "www.google.com",
  linkSource     : "www.google.com"
};

(function() {
var elem = document.createElement("p"),
    elem2 = document.createElement("span");
    // name = document.createTextNode(modalObject.name),
    myModal_name = document.getElementById("dynamicText");
    myModal_desc = document.getElementById("dynamicDesc");

elem.innerHTML = modalObject.name;
elem2.innerHTML = modalObject.description;
elem.style.color="red";
myModal_name.parentNode.appendChild(elem);
myModal_desc.parentNode.appendChild(elem2);
}) ();



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
};

