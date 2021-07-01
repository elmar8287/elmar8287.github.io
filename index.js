function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Create an objects. A array of objects - My projects array

var cardTitle = document.querySelectorAll(".card-body > h2");
var cardImage = document.querySelectorAll(".snapshot");
var cardInfo = document.querySelectorAll(".frame-2");
var cardDesc = document.querySelectorAll(".body-3");
var cardTech = document.querySelectorAll(".tags");
var cardBtn = document.querySelectorAll(".button");
var cards = document.querySelectorAll(".card"); //comes from <arcticle class="card">

var cardObjects = [
  card1 = {
    title: cardTitle[0].innerHTML,
    info: cardInfo[0],
    Image: cardImage[0],
    description: cardDesc[0],
    technologies: cardTech[0],
    linkVersion: "https://elmar8287.github.io",
    linkSource: "https://github.com/elmar8287/elmar8287.github.io",
    cardbutton: cardBtn[0],
  },
  
  card2 = {
    title: cardTitle[1].innerHTML,
    info: cardInfo[1],
    Image: cardImage[1],
    description: cardDesc[1],
    technologies: cardTech[1],
    linkVersion: "https://elmar8287.github.io",
    linkSource: "https://github.com/elmar8287/elmar8287.github.io",
    cardbutton: cardBtn[1],
  },

  card3 = {
    title: cardTitle[2].innerHTML,
    info: cardInfo[2],
    Image: cardImage[2],
    description: cardDesc[2],
    technologies: cardTech[2],
    linkVersion: "https://elmar8287.github.io",
    linkSource: "https://github.com/elmar8287/elmar8287.github.io",
    cardbutton: cardBtn[2],
  },

  card4 = {
    title: cardTitle[3].innerHTML,
    info: cardInfo[3],
    Image: cardImage[3],
    description: cardDesc[3],
    technologies: cardTech[3],
    linkVersion: "https://elmar8287.github.io",
    linkSource: "https://github.com/elmar8287/elmar8287.github.io",
    cardbutton: cardBtn[3],
  }
];

for (var i=0; i<cardObjects.length; i++) {
  console.log(cardObjects[i]);
}



// var myProjects = [
//   card1 = {
//     name: 'Tonic',
//     description:
//       'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     technologies: ['html', 'css', 'javascript'],
//     image: {
//       link: './images/snapshots/1.svg',
//       alt: 'Tonic screenshot',
//     },
//     liveSource: 'Live',
//     sourceCode: 'Source',
//   },
//   card2 = {
//     name: 'Multi-Post Stories',
//     description:
//       'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
//     technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
//     image: {
//       link: './img/',
//       alt: 'Multi-Post Stories screenshot',
//     },
//     liveSource: '#',
//     sourceCode: '#',
//   },
//   card3 = {
//     name: 'Facebook 360',
//     description:
//       "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
//     technologies: ['html', 'css', 'javascript'],
//     image: {
//       link: './img/',
//       alt: 'Facebook 360screenshot',
//     },
//     liveSource: '#',
//     sourceCode: '#',
//   },
//   card4 = {
//     name: 'Uber Navigation',
//     description:
//       'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
//     technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
//     image: {
//       link: './img/',
//       alt: 'Uber Navigation screenshot',
//     },
//     liveSource: 'Live',
//     sourceCode: 'Source',
//   },
// ];

// var technologies = document.body.querySelector(".tags");
// console.log(technologies);



// (function() {
// var elem = document.createElement("p"),
//     elem2 = document.createElement("span");
//     elem3 = document.createElement("div");
//     myModal_name = document.getElementById("dynamicText");
//     myModal_desc = document.getElementById("dynamicDesc");
//     myModal_div = document.getElementById("myModal");
  

// // elem.innerHTML = myProjects[0].name;
// var paragraf = document.body.querySelector(".modalDescr"); //create modal description
// var header = document.body.querySelector("#modalTitle"); //create modal name
// var modalImage = document.body.querySelector(".modalImage"); //create modal featured image
// var modalHeader = document.body.querySelector("#modalHeader"); //modalHeader div
// var image = document.createElement("img"); //create image element for future linking
// var technologies = document.body.querySelector(".modalTechnologies"); //create technologies list
// var technologies2 = document.body.querySelectorAll(".tags");
// var buttonLive = document.body.querySelector("#modalLive"); //create live link button
// var buttonSource = document.body.querySelector("#modalSource"); //create source link button


// console.log(technologies2);

// technologies.appendChild(technologies2);
// image.src = myProjects[0].image.link;
// paragraf.innerHTML = myProjects[0].description;
// header.innerHTML = myProjects[0].name;
// modalImage.appendChild(image);
// // technologies.innerHTML = myProjects[0].technologies.join(" ");
// buttonLive.innerHTML = myProjects[0].liveSource;
// buttonSource.innerHTML = myProjects[0].sourceCode;

// //modal section styling

// paragraf.style.display = "flex";
// paragraf.style.paddingTop = "20px";

// // technologies.style.color = "#6070FF";
// // technologies.style.backgroundColor = "#EBEBFF";
// // technologies.style.marginRight = "10px";



// modalHeader.style.display = "flex";
// modalHeader.style.justifyContent = "space-between";
// modalHeader.style.alignItems = "center";
// image.style.width = "100%";
// image.style.height = "100%";
// image.style.display = "block";
// modalImage.style.width = "90%";
// modalImage.style.height = "40%";
// modalImage.style.paddingTop = "15px";
// header.style.color = "black";
// header.style.fontSize = "22px";





// // elem2.innerHTML = myProjects.featuredImage;
// // elem2.innerHTML = myProjects[1].name;
// // // elem.style.color="red";
// // myModal_name.parentNode.appendChild(elem);
// // myModal_desc.parentNode.appendChild(elem2);
// // myModal_div.parentNode.appendChild(elem3);
// }) ();

// // var title = document.createElement("h2"),
// //     elem2 = document.createElement("span");
// //     elem3 = document.createElement("div");
// // const x = document.getElementById("");

// // for (var i=0; i< myProjects.length; i++) {
// //   if (myProjects[i].companyName == 'Uber') {
// //     console.log(myProjects[i].name);
    
// //   }
// // }



// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
// modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   }
// };
