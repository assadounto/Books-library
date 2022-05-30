const booksLibrary = document.querySelector('#booksLibrary');
const form = document.querySelector('#newBook');
const booksTable = document.querySelector('#booksTable');
const contact = document.querySelector('#contact');
export function colorCards() {
  const bookCards = booksTable.childNodes;
  for (let i = 0; i < bookCards.length; i += 1) {
    if (i % 2 !== 0) {
      bookCards[i].style.background = 'rgba(94, 87, 87, 0.671)';
    }
  }
}
export function addBook(book, title, author) {
  book.title = title;
  book.author = author;

  const bookLabel = document.createElement('article');
  const bookText = document.createElement('h4');
  const deleteButton = document.createElement('button');

  bookLabel.classList.add('bookLabel');
  bookText.classList.add('bookText');
  deleteButton.classList.add('delete', 'btn', 'btn-danger');

  booksTable.appendChild(bookLabel);
  bookLabel.appendChild(bookText);
  bookLabel.appendChild(deleteButton);

  colorCards();

  bookText.textContent = `"${title}" by ${author}`;
  deleteButton.textContent = 'Delete';

  const l = bookLabel.style;
  l.display = 'flex';
  l.justifyContent = 'space-between';
  l.alignItems = 'center';
  l.width = '100%';
  l.height = '50px';
  l.padding = '5px';
  l.boxSizing = 'border-box';

  deleteButton.style.margin = '0 5px';
  deleteButton.style.transform = 'translateX(0)';
  deleteButton.style.height = '40px';

  booksLibrary.style.display = 'flex';
  booksLibrary.style.width = '100%';
  booksLibrary.style.flexDirection = 'column';
  booksLibrary.style.alignItems = 'center';
  form.style.display = 'none';
  contact.style.display = 'none';

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove();
  });
}

export function listab() {
  booksLibrary.style.display = 'flex';
  booksLibrary.style.width = '100%';
  booksLibrary.style.flexDirection = 'column';
  booksLibrary.style.alignItems = 'center';
  form.style.display = 'none';
  contact.style.display = 'none';
}

export function addnewtab() {
  booksLibrary.style.display = 'none';
  form.style.display = 'flex';
  contact.style.display = 'none';
}

export function contacttab() {
  booksLibrary.style.display = 'none';
  form.style.display = 'none';
  contact.style.display = 'block';
}
