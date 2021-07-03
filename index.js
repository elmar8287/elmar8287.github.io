// //Mobile menu

// function openNav() {
//   document.getElementById('myNav').style.width = "100%";
// }
  
// function closeNav() {
//   document.getElementById('myNav').style.width = "0%";
// }

// Cards object creation
const cardTitle = document.querySelectorAll('.card-body > h2');
const cardImage = document.querySelectorAll('.section-img1');
const cardInfo = document.querySelectorAll('.info');
const cardDesc = document.querySelectorAll('.section-info');
const cardTech = document.querySelectorAll('.program-btns');
const cardBtn = document.querySelectorAll('.myBtn');
let card1 = {};
let card2 = {};
let card3 = {};
let card4 = {};
const cardObjects = [
  (card1 = {
    title: cardTitle[0].innerHTML,
    info: cardInfo[0],
    Image: cardImage[0],
    description: cardDesc[0],
    technologies: cardTech[0],
    cardbutton: cardBtn[0],
    Live: 'https://elmar8287.github.io/',
    Source: 'https://github.com/elmar8287/elmar8287.github.io',
  }),
  (card2 = {
    title: cardTitle[2].innerHTML,
    info: cardInfo[1],
    Image: cardImage[1],
    description: cardDesc[1],
    technologies: cardTech[1],
    cardbutton: cardBtn[3],
    Live: 'https://elmar8287.github.io/',
    Source: 'https://github.com/elmar8287/elmar8287.github.io',
  }),
  (card3 = {
    title: cardTitle[4].innerHTML,
    info: cardInfo[2],
    Image: cardImage[2],
    description: cardDesc[2],
    technologies: cardTech[2],
    cardbutton: cardBtn[4],
    Live: 'https://elmar8287.github.io/',
    Source: 'https://github.com/elmar8287/elmar8287.github.io',
  }),
  (card4 = {
    title: cardTitle[5].innerHTML,
    info: cardInfo[3],
    Image: cardImage[3],
    description: cardDesc[2],
    technologies: cardTech[3],
    cardbutton: cardBtn[5],
    Live: 'https://elmar8287.github.io/',
    Source: 'https://github.com/elmar8287/elmar8287.github.io',
  }),
];

// Modal creation

const div = document.createElement('div');
div.className = 'modal';
div.id = 'myModal';
div.setAttribute('data-close-button', '');
const div2 = document.createElement('div');
div2.className = 'modal-content modal-card';
const div3 = document.createElement('div');
div3.id = 'modal-header';
const h2 = document.createElement('h2');
h2.id = 'modal-title';
h2.innerHTML = 'ffff';
div3.appendChild(h2);
const button1 = document.createElement('span');
button1.setAttribute('class', 'close');
button1.innerHTML = '&times;';
div3.appendChild(button1);
div2.appendChild(div3);
const div8 = document.createElement('div');
div8.className = 'modal-float2';
const p = document.createElement('p');
p.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
p.className = 'modal-desc';
div8.appendChild(p);
const div7 = document.createElement('div');
div7.className = 'modal-float';
const div5 = document.createElement('div');
div5.id = 'modal-foot';
const button2 = document.createElement('button');
button2.setAttribute('type', 'button');
button2.className = 'btn4 btn';
button2.textContent = 'See live';
const livesee = document.querySelector('.modallive');
livesee.style.display = 'block';
livesee.firstElementChild.style.width = '25px';
livesee.firstElementChild.style.height = '25px';
livesee.style.heigth = '8px';
livesee.style.marginLeft = '5px';
button2.appendChild(livesee);
div5.appendChild(button2);
const button3 = document.createElement('button');
button3.setAttribute('type', 'button');
button3.className = 'btn4 btn';
button3.textContent = 'See Source';
const git = document.querySelector('.modalgit');
git.style.display = 'block';
git.style.marginLeft = '5px';
button3.appendChild(git);
div5.appendChild(button3);
div7.appendChild(div5);
div8.appendChild(div7);
div2.appendChild(div8);
const div6 = document.createElement('div');
div6.id = 'modal-line';
div.appendChild(div2);
div.appendChild(div6);
const body = document.getElementById('body');
body.appendChild(div);

// Open Modal

for (let i = 0; i < cardObjects.length; i += 1) {
  cardObjects[i].cardbutton = cardBtn[i];
  if (cardObjects[i].cardbutton.classList.contains('myBtn1')) {
    cardObjects[i] = card1;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'block';
      h2.innerHTML = cardObjects[i].title;
      div2.insertBefore(cardObjects[i].Image, div8);
      cardImage[0].style.display = 'block';
      div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
      div7.insertBefore(cardObjects[i].technologies, div5);
    });
  }
  if (cardObjects[i].cardbutton.classList.contains('myBtn2')) {
    cardObjects[i] = card2;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'block';
      h2.innerHTML = cardObjects[i].title;
      div2.insertBefore(cardObjects[i].Image, div8);
      cardImage[1].style.display = 'block';
      div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
      div7.insertBefore(cardObjects[i].technologies, div5);
    });
  }
  if (cardObjects[i].cardbutton.classList.contains('myBtn3')) {
    cardObjects[i] = card3;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'block';
      h2.innerHTML = cardObjects[i].title;
      div2.insertBefore(cardObjects[i].Image, div8);
      cardImage[2].style.display = 'block';
      div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
      div7.insertBefore(cardObjects[i].technologies, div5);
    });
  } else if (cardObjects[i].cardbutton.classList.contains('myBtn4')) {
    cardObjects[i] = card4;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'block';
      h2.innerHTML = cardObjects[i].title;
      div2.insertBefore(cardObjects[i].Image, div8);
      cardImage[3].style.display = 'block';
      div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
      div7.insertBefore(cardObjects[i].technologies, div5);
    });
  }
}

// Closing modal

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
};

// Form Validation

const form = document.getElementById('footer-form');
const email = document.getElementById('email-detail');
const errorMessage = document.getElementById('invalid');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMessage.style.color = 'white';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.textContent = 'Please use only lowercase letters for your e-mail!';
  }
});

// Storage

function saveFormDataToLocalStorage(name, email, message) {
  const contactInfo = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
}
const nameInput = document.querySelector('footer form input[type="text"]');
const emailInput = document.querySelector('footer form input[type=email]');
const messageInput = document.querySelector('footer form textarea');
const inputsArray = [emailInput, nameInput, messageInput];
// GETTING FORM DATA FROM LOCAL STORAGE
window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('contactInfo'))) {
    const { name, email, message } = JSON.parse(
      localStorage.getItem('contactInfo'),
    );
    emailInput.value = email;
    nameInput.value = name;
    messageInput.value = message;
  }
  inputsArray.forEach((input) => input.addEventListener('input', (e) => {
    if (input === nameInput) {
      nameInput.value = input.value;
    } else if (input === emailInput) {
      emailInput.value = input.value;
      // VALIDATION EMAIL INPUT
      if (e.target.value !== emailInput.value.toLowerCase()) {
        e.preventDefault();
        emailInput.parentElement.classList.add('invalidInput');
      } else {
        saveFormDataToLocalStorage(nameInput, emailInput, messageInput);
        emailInput.parentElement.classList.remove('invalidInput');
      }
    } else {
      messageInput.value = input.value;
    }
    saveFormDataToLocalStorage(nameInput, emailInput, messageInput);
  }));
});
