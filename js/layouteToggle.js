import { gridButton, listButton, cardsList } from './variables.js';

// Переключение раскладки карточек

const layouteToggle = () => {

  // const gridButton = document.querySelector('.card-view-button-grid');
  // const listButton = document.querySelector('.card-view-button-list');
  // const cardsList = document.querySelector('.cards');

  const layouteToggle = (grid, list, card) => {

    grid.addEventListener('click', () => {
      grid.classList.add('active');
      list.classList.remove('active');
      card.classList.remove('list');
    })

    list.addEventListener('click', () => {
      grid.classList.remove('active');
      list.classList.add('active');
      card.classList.add('list');
    })
  }
  layouteToggle(gridButton, listButton, cardsList);
}

export { layouteToggle }