const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const headContainer = document.createElement('div');
  const dateBox = document.createElement('span');
  const titleBox = document.createElement('h1');
  const tempBox = document.createElement('span');

  //content
  dateBox.textContent = date;
  titleBox.textContent = title;
  tempBox.textContent = temp;

  //classes
  headContainer.classList.add('header');
  dateBox.classList.add('date');
  tempBox.classList.add('temp');

  //append
  headContainer.appendChild(dateBox);
  headContainer.appendChild(titleBox);
  headContainer.appendChild(tempBox);
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headContainer;
}

const headerAppender = (selector) => {
  const currentSelector = document.querySelector(selector);
  const header = Header('BloomTech News', 'Sept 12, 2023', '90*');
  currentSelector.appendChild(header);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
