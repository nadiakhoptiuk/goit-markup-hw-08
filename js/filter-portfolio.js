import { portfolio } from './portfolio.js';

const source = document.getElementById('text-template').innerHTML;

// initialing function template
const template = Handlebars.compile(source);
// execute the compiled template and print the output to the console

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
  if (event.target.nodeName !== 'BUTTON') {
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
    .map(portfolio => {
      const {
        desc,
        title,
        mobile1x,
        mobile2x,
        mobile3x,
        tablet1x,
        tablet2x,
        tablet3x,
        desktop1x,
        desktop2x,
        desktop3x,
        type,
        alt,
      } = portfolio;
      // call function template for every object
      return template(portfolio);
    })
    .join('');

  refs.projects.innerHTML = '';
  refs.projects.insertAdjacentHTML('beforeend', markup);
}
