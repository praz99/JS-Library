const myLibrary = [];

const Book = (author, title, num, status) => {
  return { author, title, num, status };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook(books) {
  const newBook = document.getElementById('tableBody');
  let str = '';
  books.forEach((bokk, index) => {
    str += `
    <tr>
      <td> ${index + 1}</td>
      <td> ${bokk.author}</td>
      <td> ${bokk.title}</td>
      <td> ${bokk.num}</td>
      <td> <input onclick="change(this, ${index})" type="button" value="${bokk.status}" id="" class="btn btn-primary"></input></td>
      <td> <button onclick="deleted(${index})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  });
  newBook.innerHTML = str;
}

/* eslint-disable no-unused-vars */
function change(elem, index) {
  if (elem.value === 'read') {
    elem.value = 'unread';
  } else {
    elem.value = 'read';
  }
  myLibrary[index].status = elem.value;
}


function deleted(index) {
  myLibrary.splice(index, 1);
  displayBook(myLibrary);
}
/* eslint-enable no-unused-vars */

const form = document.getElementById('form');

const preventRefresh = (event) => {
  event.preventDefault();
};

function addBook() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const num = document.getElementById('num').value;

  let status;
  if (document.getElementById('read').checked) status = 'read';
  else status = 'unread';


  const book = Book(author, title, num, status);

  addBookToLibrary(book);
  displayBook(myLibrary);
  form.reset();
}

form.addEventListener('submit', addBook);
form.addEventListener('submit', preventRefresh);
