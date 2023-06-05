// переменные для темы
const lightThemeButton = document.querySelector('.theme-button-light');
const darkThemeButton = document.querySelector('.theme-button-dark');
const bodyStyle = document.querySelector('.page');

// переменные для шрифтов

const sansSerifButton = document.querySelector('.font-button-sans-serif');
const serifButton = document.querySelector('.font-button-serif');

// переменные для обзоров

const blogArticles = document.querySelectorAll('.blog-article');

// переменные переключателя раскладки карточек

const gridButton = document.querySelector('.card-view-button-grid');
const listButton = document.querySelector('.card-view-button-list');
const cardsList = document.querySelector('.cards');

// переменные для слайдера галереи

const activePhoto = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.preview-list a');

export { lightThemeButton, darkThemeButton, bodyStyle, blogArticles, sansSerifButton, serifButton, gridButton, listButton, cardsList, activePhoto, previews };