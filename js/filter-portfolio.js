const portfolio = [
  {
    title: 'Технокряк',
    type: 'Веб-сайт',
    tags: ['Веб-сайты', 'Все'],
    src: './images/project-1-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Технокряк',
  },
  {
    title: 'Постер New Orlean vs Golden Star',
    type: 'Дизайн',
    tags: ['Дизайн', 'Все'],
    src: './images/project-2-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Постер New Orlean vs Golden Star',
  },
  {
    title: 'Ресторан Seafood',
    type: 'Приложение',
    tags: ['Приложения', 'Все'],
    src: './images/project-3-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Ресторан Seafood',
  },
  {
    title: 'Проект Prime',
    type: 'Маркетинг',
    tags: ['Маркетинг', 'Все'],
    src: './images/project-4-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Проект Prime',
  },
  {
    title: 'Проект Boxes',
    type: 'Приложение',
    tags: ['Приложения', 'Все'],
    src: './images/project-5-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Проект Boxes',
  },
  {
    title: 'Inspiration has no Borders',
    type: 'Веб-сайт',
    tags: ['Веб-сайты', 'Все'],
    src: './images/project-6-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Inspiration has no Borders',
  },
  {
    title: 'Издание Limited Edition',
    type: 'Дизайн',
    tags: ['Дизайн', 'Все'],
    src: './images/project-7-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Издание Limited Edition',
  },
  {
    title: 'Проект LAB',
    type: 'Маркетинг',
    tags: ['Маркетинг', 'Все'],
    src: './images/project-8-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Проект LAB',
  },
  {
    title: 'Growing Business',
    type: 'Приложение',
    tags: ['Приложения', 'Все'],
    src: './images/project-9-mobile.jpg',
    desc: 'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    alt: 'Картинка проекта Growing Business',
  },
];

const refs = {
  buttons: document.querySelector('.js-buttons'),
  projects: document.querySelector('.js-projects'),
};

// add listener fot buttons ul
refs.buttons.addEventListener('click', onButtonFilterClick);

// create start markup
createPortfolioItemMarkup(portfolio);

function onButtonFilterClick(event) {
  // check where the event occurred
  if (event.target.className !== 'portfolio-button') {
    return;
  }

  // create new array with only elements which satisfy the condition
  const filteredPortfolio = portfolio.filter(obj => obj.tags.includes(event.target.textContent));

  removeActiveClassFromPrevButton();

  // add class for next button
  event.target.classList.add('is-active');

  // build new html according to filter
  createPortfolioItemMarkup(filteredPortfolio);
}

// remove class from previous button
function removeActiveClassFromPrevButton() {
  const prevActiveButton = refs.buttons.querySelector('.is-active');

  if (prevActiveButton) {
    prevActiveButton.classList.remove('is-active');
  }
}

// create html markup and add it to DOM
function createPortfolioItemMarkup(array) {
  const markup = array
    .map(({ desc, title, src, type, alt }) => {
      return /*html*/ `
  <li class="projects__item">
    <a href="" class="projects__link">
      <div class="projects__thumb">
          <img
            class="projects__img"
            src=${src}
            alt=${alt}
          />
        <p class="hidden-text">
          ${desc}
        </p>
      </div>

      <div class="projects__info">
        <h2 class="projects__title">${title}</h2>
        <p class="projects__category">${type}</p>
      </div>
    </a>
  </li>
  `;
    })
    .join('');

  refs.projects.innerHTML = markup;
}
