import * as functions from './functions.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');
let myLibrary = [];
export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    myLibrary.push(this);
    functions.colorCards();
    functions.addBook(this, title.value, author.value);
    localStorage.setItem('books', JSON.stringify(myLibrary));
  }

  remove() {
    myLibrary = myLibrary.filter((element) => element !== this);
    localStorage.setItem('books', JSON.stringify(myLibrary));
    functions.colorCards();
  }
}