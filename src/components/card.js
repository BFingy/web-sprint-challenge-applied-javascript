import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  const cardContainer = document.createElement('div');
  const headliner = document.createElement('div');
  const authorBox = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const byLine = document.createElement('span');

  //content
  headliner.textContent = article.headline;
  image.src = article.authorPhoto;
  byLine.textContent = `By ${article.authorName}`;

  //classes
  cardContainer.classList.add('card');
  headliner.classList.add('headline');
  authorBox.classList.add('author');
  imgContainer.classList.add('img-container');

  //click event
  cardContainer.addEventListener('click', () => {
    console.log(headliner);
  });

  //append
  cardContainer.appendChild(headliner);
  cardContainer.appendChild(authorBox);
  authorBox.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorBox.appendChild(byLine);
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardContainer;
}

const cardAppender = (selector) => {
  const currentSelector = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
  .then(resp => {
    const articles = resp.data.articles;
    for (let prop in articles) {
      const content = articles[prop];
      content.forEach(element => {
        currentSelector.appendChild(Card(element))
        
      });
    }
  })
  .catch(err => {
    console.error(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
