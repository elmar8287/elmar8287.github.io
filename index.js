function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Create an objects. A array of objects - My projects array

const myProjects = [
  card1 = {
    name: 'Tonic',
    companyName: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './images/snapshots/1.svg',
      alt: 'Tonic screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  card2 = {
    name: 'Multi-Post Stories',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: './img/',
      alt: 'Multi-Post Stories screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  card3 = {
    name: 'Facebook 360',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  card4 = {
    name: 'Uber Navigation',
    companyName: 'Uber',
    position: 'Lead Developer',
    year: 2018,
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: './img/',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
];

console.log(myProjects[0].image);



(function() {
var elem = document.createElement("p"),
    elem2 = document.createElement("span");
    elem3 = document.createElement("div");
    myModal_name = document.getElementById("dynamicText");
    myModal_desc = document.getElementById("dynamicDesc");
    myModal_div = document.getElementById("myModal");
  

// elem.innerHTML = myProjects[0].name;
var paragraf = document.body.querySelector("#dynamicText");
var header = document.body.querySelector("#modalTitle");
var modalImage = document.body.querySelector(".modalImage");
var modalHeader = document.body.querySelector("#modalHeader");
modalHeader.style.display = "flex";
modalHeader.style.justifyContent = "space-between";
modalHeader.style.alignItems = "center";
var image = document.createElement("img");
image.style.width = "100%";
image.style.height = "100%";
image.style.display = "block";
image.src = myProjects[0].image.link;
modalImage.appendChild(image);
modalImage.style.width = "90%";
modalImage.style.height = "40%";
header.style.color = "black";
header.style.fontSize = "22px";
paragraf.innerHTML = myProjects[0].image;
header.innerHTML = myProjects[0].name;




// elem2.innerHTML = myProjects.featuredImage;
// elem2.innerHTML = myProjects[1].name;
// // elem.style.color="red";
// myModal_name.parentNode.appendChild(elem);
// myModal_desc.parentNode.appendChild(elem2);
// myModal_div.parentNode.appendChild(elem3);
}) ();

var title = document.createElement("h2"),
    elem2 = document.createElement("span");
    elem3 = document.createElement("div");
const x = document.getElementById("");

for (let i=0; i< myProjects.length; i++) {
  if (myProjects[i].companyName == 'Uber') {
    console.log(myProjects[i].name);
    
  }
}



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

