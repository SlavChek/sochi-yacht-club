import { activePhoto, previews } from './variables.js'

// Слайдер галерея 

const photoSlider = () => {

  // const activePhoto = document.querySelector('.active-photo');
  // const previews = document.querySelectorAll('.preview-list a');

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
}

export { photoSlider }