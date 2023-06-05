// переключение тем

const lightThemeButton = document.querySelector('.theme-button-light');
const darkThemeButton = document.querySelector('.theme-button-dark');
const bodyStyle = document.querySelector('.page');

// Светлая тема

const themeToggle = (lightButton, darkButton, style) => {
  lightButton.addEventListener('click', () => {
    lightButton.classList.add('active');
    darkButton.classList.remove('active');
    style.classList.remove('dark');
  })

  // Тёмная тема

  darkButton.addEventListener('click', () => {
    lightButton.classList.remove('active');
    darkButton.classList.add('active');
    style.classList.add('dark');
  })
}

themeToggle(lightThemeButton, darkThemeButton, bodyStyle);

// переключение шрифтов

const sansSerifButton = document.querySelector('.font-button-sans-serif');
const serifButton = document.querySelector('.font-button-serif');

const fontToggle = (sansSerif, serif, style) => {

  sansSerif.addEventListener('click', () => {
    serif.classList.remove('active');
    sansSerif.classList.add('active');
    style.classList.remove('serif');
  })

  serif.addEventListener('click', () => {
    serif.classList.add('active');
    sansSerif.classList.remove('active');
    style.classList.add('serif');
  })
}

fontToggle(sansSerifButton, serifButton, bodyStyle);

// Обзор статьи

const blogArticles = document.querySelectorAll('.blog-article');

const articleReviews = (articles) => {
  for (const article of articles) {
    const moreButton = article.querySelector('.more');

    moreButton.addEventListener('click', () => {
      article.classList.remove('short')
    })
  }
}

articleReviews(blogArticles);

// Переключение раскладки карточек

const gridButton = document.querySelector('.card-view-button-grid');
const listButton = document.querySelector('.card-view-button-list');
const cardsList = document.querySelector('.cards');

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

// Слайдер галерея 

const activePhoto = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.preview-list a');

const photoSlider = (active, preview) => {

  for (const mainPhoto of preview) {
    mainPhoto.addEventListener('click', (evt) => {
      evt.preventDefault();

      active.src = mainPhoto.href;

      const currentActive = document.querySelector('.preview-list .active-item');

      currentActive.classList.remove('active-item');
      mainPhoto.classList.add('active-item');

    })
  }
}

photoSlider(activePhoto, previews);

