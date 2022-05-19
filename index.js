const projects = [
  {
    id: 0,
    name: 'Sprinters sales inventory web-page',
    companyName: 'Dreamcar Auto Sales',
    position: 'Front End Dev',
    year: 2022,
    description:
      'This is an inventory displaying website for USA custormer, which is a diller for Mercedes Sprinters and other VANs.',
    technologies: ['react', 'redux', 'firebase','netlify'],
    image: {
      link: './img/pproject9.jpg',
      alt: 'Sprinters sales inventory web-page',
    },
    liveSource: 'https://dreamcarsautosales.com/',
    sourceCode: 'https://github.com/elmar8287/dreamcar-auto-sales',
  },
  {
    id: 1,
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
    id: 2,
    name: 'TODO list in React',
    companyName: 'Company X',
    position: 'Front End Dev',
    year: 2021,
    description:
      'This is a SPA todo-list, helps to organize tasks. You can easily add, delete and edit todos. Also, there is the possibility to mark tasks as completed. Local storage will keep your task on the list after refreshing and either close/open the browser.',
    technologies: ['react', 'css'],
    image: {
      link: './img/project4.png',
      alt: 'TODO list',
    },
    liveSource: 'https://elmar8287.github.io/react-tuto/',
    sourceCode: 'https://github.com/elmar8287/react-tuto',
  },
  {
    id: 3,
    name: 'Awesome Books',
    companyName: 'Company Y',
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
    id: 4,
    name: 'JS API project - Meals DB',
    companyName: 'Company Z',
    position: 'Front End Dev',
    year: 2021,
    description:
      'Meal API allows us to get a list of items with a unique item id (or generate the unique id), and for a given item, get detailed information about it. Also used other API, where saved likes and comments for each item.',
    technologies: ['html', 'css','bootstrap', 'javascript'],
    image: {
      link: './img/project3.png',
      alt: 'JS API project',
    },
    liveSource: 'https://aliabbani.github.io/Lemonade-api/dist/',
    sourceCode: 'https://github.com/aliabbani/Lemonade-api',
  },
  {
    id: 5,
    name: 'Space Travelers Hub',
    companyName: 'SpaceX',
    position: 'Front End Dev',
    year: 2021,
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    technologies: ['css','react', 'redux', 'javascript', 'netlify'],
    image: {
      link: './img/project7.PNG',
      alt: 'Space Travelers Hub',
    },
    liveSource: 'https://space-travelers.netlify.app/',
    sourceCode: 'https://github.com/elmar8287/space-travelers',
  },
  {
    id: 6,
    name: 'Leaderboard API',
    companyName: 'Company B',
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
  {
    id: 7,
    name: 'Math Magicians',
    companyName: 'Company C',
    position: 'Full stack',
    year: 2021,
    description:
      'It is a Single Page App (SPA) built in React. This project allows users to make simple calculations and read a random math-related quote.',
    technologies: ['css','react', 'javascript', 'heroku', 'netlify'],
    image: {
      link: './img/project5.PNG',
      alt: 'Math Magicians',
    },
    liveSource: 'https://elmar8287.github.io/react-math/',
    sourceCode: 'https://github.com/elmar8287/react-math',
  },
  {
    id: 8,
    name: 'Bookstore',
    companyName: 'Company D',
    position: 'Full stack',
    year: 2021,
    description:
      'This is a React application related to add, delete and display favorite books. Here you can see progress in reading for each book.',
    technologies: ['css','react', 'redux', 'javascript', 'netlify'],
    image: {
      link: './img/project6.PNG',
      alt: 'Bookstore',
    },
    liveSource: 'https://bookstore-abdulkae.netlify.app/',
    sourceCode: 'https://github.com/elmar8287/Bookstore',
  },
  {
    id: 9,
    name: 'Covid-19 Metrics',
    companyName: 'Covid-19',
    position: 'Full stack',
    year: 2021,
    description:
      'The project is about building a mobile web application to check a list of Worldwide COVID-19 metrics (numeric values). By clicking on the country name, there is a possibility to view more detailed information.',
    technologies: ['css','react', 'redux', 'javascript', 'netlify'],
    image: {
      link: './img/project8.PNG',
      alt: 'COVID-19 Metrics',
    },
    liveSource: 'https://elmar-project-covid19.netlify.app/',
    sourceCode: 'https://github.com/elmar8287/metrics',
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