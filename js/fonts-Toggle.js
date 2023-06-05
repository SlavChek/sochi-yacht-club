import { bodyStyle, sansSerifButton, serifButton } from './variables.js'

// переключение шрифтов

const fontToggle = () => {

  // const sansSerifButton = document.querySelector('.font-button-sans-serif');
  // const serifButton = document.querySelector('.font-button-serif');

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
}

export { fontToggle }