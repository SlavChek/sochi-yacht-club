import { blogArticles } from './variables.js'

// Обзор статьи

const articleReview = () => {

  // const blogArticles = document.querySelectorAll('.blog-article');

  const articleReview = (articles) => {
    for (const article of articles) {
      const moreButton = article.querySelector('.more');

      moreButton.addEventListener('click', () => {
        article.classList.remove('short')
      })
    }
  }
  articleReview(blogArticles);
}

export { articleReview };