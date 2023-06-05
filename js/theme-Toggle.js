import { lightThemeButton, darkThemeButton, bodyStyle } from './variables.js';

// переключение тем

const themeToggle = () => {

  // const lightThemeButton = document.querySelector('.theme-button-light');
  // const darkThemeButton = document.querySelector('.theme-button-dark');
  // const bodyStyle = document.querySelector('.page');

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
}

export { themeToggle }
