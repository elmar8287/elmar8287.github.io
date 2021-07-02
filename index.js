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
var cardDesc = document.querySelectorAll(".discrip");
var cardTech = document.querySelectorAll(".tags");
var cardBtn = document.querySelectorAll(".cardButton");
var cards = document.querySelectorAll(".card"); //comes from <arcticle class="card">

console.log(cardTitle);
console.log(cardImage);
console.log(cardInfo);
console.log(cardDesc);
console.log(cardTech);
console.log(cardBtn);
console.log(cards);

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

// Modal creation dynamic

var div1 = document.createElement("div");
div1.className = "modal";
div1.id = "myModal";

var div2 = document.createElement("div");
div2.className = "modal-content modal-card";

var div3 = document.createElement("div");
div3.id = "modal-header";
var h2 = document.createElement("h2");
h2.id = "modal-title";
h2.innerHTML = "ffff";
div3.appendChild(h2);
var button1 = document.createElement("span");
button1.setAttribute("class", "close");
button1.innerHTML = "&times;";
div3.appendChild(button1);
div2.appendChild(div3);

var div4 = document.createElement("div");
div4.className = "modal-float2";

var p = document.createElement("p");
p.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
p.className = "modal-desc";
div4.appendChild(p);

var div5 = document.createElement("div");
div5.className = "modal-float";

var div6 = document.createElement("div");
div6.id = "modal-foot";
var button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.className = "btn4 btn";
button2.textContent = "See live";
div6.appendChild(button2);
var button3 = document.createElement("button");
button3.setAttribute("type", "button");
button3.className = "btn4 btn";
button3.textContent = "See Source";
div6.appendChild(button3);
div5.appendChild(div6);
div4.appendChild(div5);
div2.appendChild(div4);
var div7 = document.createElement("div");
div7.id = "modal-line";
div1.appendChild(div2);
div1.appendChild(div7);
var body = document.getElementById("body");
body.appendChild(div1);

for(var i = 0; i < cardObjects.length; i++) {
  cardObjects[i].cardbutton = cardBtn[i];
  if(cardObjects[i].cardbutton.classList.contains('myBtn1')) {
    cardObjects[i]=card1;
    cardObjects[i].cardbutton = cardBtn[0];
    var btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div4);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div5.insertBefore(cardObjects[i].technologies, div6);
    };
  } 
  if(cardObjects[i].cardbutton.classList.contains("myBtn2")) {
    cardObjects[i].cardbutton = cardBtn[1];
    var btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div4);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div5.insertBefore(cardObjects[i].technologies, div6);
    };
  } 
  if(cardObjects[i].cardbutton.classList.contains("myBtn3")) {
    cardObjects[i].cardbutton = cardBtn[2];
    var btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div4);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div5.insertBefore(cardObjects[i].technologies, div6);
    };
  }
  else if (cardObjects[i].cardbutton.classList.contains("myBtn4")) {
    cardObjects[i].cardbutton = cardBtn[3];
    var btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div4);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div5.insertBefore(cardObjects[i].technologies, div6);
  };
}
}

//closing button for modal

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
 if (event.target == modal) {
 modal.style.display = "none";
}
};

// Validation of form

const form = document.getElementById('myForm');
const email = document.getElementById('user_email');
const errorMessage = document.getElementById('emsg');
form.addEventListener('submit', (x) => {
  if (email.value.toLowerCase() !== email.value) {
    x.preventDefault();
    errorMessage.textContent = 'Use only lowercase letters for your e-mail!';
  }
});