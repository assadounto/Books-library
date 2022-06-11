import * as variables from './modules/Variables.js';
import * as functions from './modules/functions.js';
import Books from './modules/classmethods.js';
import showCurrentTime from './modules/time.js';

const myLibrary = [];
let storage = [];
showCurrentTime();
variables.listTab.addEventListener('click', () => {
  functions.listab();
});

variables.addNewTab.addEventListener('click', () => {
  functions.addnewtab();
});

variables.contactTab.addEventListener('click', () => {
  functions.contacttab();
});

storage = JSON.parse(localStorage.getItem('books')) || [];

for (let i = 0; i < storage.length; i += 1) {
  const book = new Books();
  book.title = storage[i].title;
  book.author = storage[i].author;
  myLibrary.push(book);
  functions.addBook(myLibrary[i], myLibrary[i].title, myLibrary[i].author);
}

variables.addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Books();
  book.add();
});