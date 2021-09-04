const projects = [
  {
    id: 0,
    name: 'Digitalization in Medicine',
    companyName: 'AIMedicine',
    position: 'Front End Dev',
    year: 2021,
    description:
      'This is a forum website with all necessary information about upcoming events, speakers, and sponsors. You can add program details and a registration form. In this template, you do not need to signup, but you can add this functionality in the future. Please, consider, that the whole content on this website is fictional.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/pproject0.jpg',
      alt: 'Digitalization in Medicine',
    },
    liveSource: 'https://elmar8287.github.io/capstone/',
    sourceCode: 'https://github.com/elmar8287/capstone',
  },
  {
    id: 1,
    name: 'Awesome Books',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'Nice designed project with Bootstrap. Used single-page application. This is a project that displays a list of books and allows you to add and remove books from that list. Each book is related to the author. You can fix the number of books, which will be displayed. In this template, you can see the max number of books per page 6.',
    technologies: ['html', 'luxon', 'css','bootstrap', 'javascript'],
    image: {
      link: './img/project1.png',
      alt: 'Awesome Books screenshot',
    },
    liveSource: 'https://elmar8287.github.io/awesome-books/',
    sourceCode: 'https://github.com/elmar8287/awesome-books',
  },
  {
    id: 2,
    name: 'Leaderboard API',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technologies: ['html', 'css','bootstrap', 'javascript'],
    image: {
      link: './img/project2.png',
      alt: 'TodoList',
    },
    liveSource: 'https://elmar8287.github.io/leaderboard/',
    sourceCode: 'https://github.com/elmar8287/leaderboard',
  },

];
const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
  <span id="closeDetails">X</span>
  <h2 class="project-title">${projects[projectIndex].name}</h2>
  <div class="stats">
      <span class="company">${projects[projectIndex].companyName}</span>
      <span class="role-and-year">${projects[projectIndex].position}</span>
      <span class="role-and-year">${projects[projectIndex].year}</span>
  </div>
  <img src="${projects[projectIndex].image.link}" alt="${
  projects[projectIndex].image.alt
}" />
  <div class="project-info">
  <p class="description">
    ${projects[projectIndex].description}
  </p>
    <div class="tech-and-buttons">
      <ul class="languages">
      ${(function usedTech() {
    return projects[projectIndex].technologies
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
      </ul>
      <div class="buttons">
        <a href="${
  projects[projectIndex].liveSource
}" class="btn">See Live <i class="fas fa-external-link-alt"></i></a>
        <a href="${
  projects[projectIndex].sourceCode
}" class="btn">See Source <i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
  </div>`;
  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    blurred.forEach((section) => {
      section.style.filter = 'blur(0)';
    });
  });
}

const portfolio = document.getElementById('portfolio');
const projectList = document.createElement('ul');
projectList.className = 'project-list';
portfolio.appendChild(projectList);

const projectsCode = projects.map(
  (project) => `<li class="project">
  <img src="${project.image.link}" alt="${project.image.alt}" />
  <div class="project-info">
    <h2 class="project-title">${project.name}</h2>
    <div class="stats">
      <span class="company">${project.companyName}</span>
      <span class="role-and-year">${project.position}</span>
      <span class="role-and-year">${project.year}</span>
    </div>
    <p class="description">
    ${project.description}
    </p>
    <ul class="languages">
    ${(function usedTech() {
    return project.technologies
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
    </ul>
    <button class="btn details-btn" type="button" data-id="${
  project.id
}">See Project</button>
  </div>
</li>`,
);
projectList.innerHTML = projectsCode.join('');

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    blurred.forEach((section) => {
      section.style.filter = 'blur(5px)';
    });
  });
});

const userData = JSON.stringify({
  name: '',
  email: '',
  message: '',
});

const form = document.getElementById('contact-form');
const usernameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email-address');
const messageText = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const resetBtn = document.getElementById('reset');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.textContent = 'Please, use only lowercase letters for your e-mail!';
  } else {
    localStorage.setItem('userInfo', userData);
  }
});

// -------------- Local Storage ---------------------------

window.addEventListener('load', () => {
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    usernameInput.value = userInfo.name;
    emailInput.value = userInfo.email;
    messageText.value = userInfo.message;
  } else {
    localStorage.setItem('userInfo', userData);
  }
});

function saveData(key, value) {
  if (localStorage.getItem('userInfo')) {
    const oldData = JSON.parse(localStorage.getItem('userInfo'));
    const newData = { ...oldData, [key]: value };
    localStorage.setItem('userInfo', JSON.stringify(newData));
  } else {
    localStorage.setItem('userInfo', userData);
  }
}

form.addEventListener('input', (evt) => {
  if (evt.target.dataset.id === 'name' || evt.target.dataset.id === 'email' || evt.target.dataset.id === 'message') {
    saveData(evt.target.dataset.id, evt.target.value);
  }
});

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

closeNav();

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};