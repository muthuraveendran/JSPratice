/* BOOK Constructor */
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

/* UI Constructor */
function UI() {}

/* Add a Book list to UI */
UI.prototype.addBookList = function(book) {
    // console.log(book);
    const list = document.getElementById('book-list');
    /* Create a tr element */
    const row = document.createElement('tr');
    row.className="trRow"
    row.innerHTML = `
                    <td>${book.title}</td> 
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete-item">X</a></td>`

    list.appendChild(row);
}

/* Clear UI Fileld */
UI.prototype.clearField = function() {
    document.querySelector('.title').value ="";
    document.querySelector('.author').value ="";
    document.querySelector('.isbn').value ="";
}



UI.prototype.removeElement = function() {
    document.getElementById('book-list').addEventListener('click', function(e) {
        if(e.target.classList.contains('delete-item')) {
             e.target.parentElement.parentElement.remove();
        }
     console.log(e.target);
     })
}

/* Event Listener */
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('.title').value,
    author = document.querySelector('.author').value,
    isbn = document.querySelector('.isbn').value;

    /* Intiate book */
    const book = new Book(title, author, isbn);
    // console.log(book);

    /* Add to Book list */
    const ui = new UI();

    /* Validate  */
    // let tileLength = title.value.trim();
    // let authorLength = author.value.trim();
    // let isbnLength = isbn.value.trim();
    if(title === '' || author === '' || isbn === '') {
        alert("Please enter value");
    } else {
    /* Add a Book */
    ui.addBookList(book);
    /* Clear field */
    ui.clearField();
    }

     /* Remove field */

    ui.removeElement();
   e.preventDefault(); 
})



// console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<Hello>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></Hello>");