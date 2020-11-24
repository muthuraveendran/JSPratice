class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UI {

    /* Add a List  */
    /* Add a Book list to UI */
    addBookList(book) {
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
    clearField() {
    document.querySelector('.title').value ="";
    document.querySelector('.author').value ="";
    document.querySelector('.isbn').value ="";
}

/* remove the element */
removeElement() {
    document.getElementById('book-list').addEventListener('click', function(e) {
        if(e.target.classList.contains('delete-item')) {
             e.target.parentElement.parentElement.remove();
        }
     console.log(e.target);
     })
  }
}

/* class storage */

class localStore {
   static getBooks() {
       let books;
       if(localStorage.getItem('books') === null) {
           books = [];
       } else {
           books = JSON.parse(localStorage.getItem('books'));
       }
       return books;
    }

    static displayBooks() {
        const books = localStore.getBooks();
        books.forEach(books => {
            const ui = new UI;

            /* Add book to UI */
            ui.addBookList(books);

        });

    }

    static addBooks(book) {
        const books = localStore.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(isbn) {
        const books = localStore.getBooks();
        books.forEach((book,index) => {
            console.log("<<<<<<<<<<<<<book.isbn>>>>>>>>>>>></book.isbn>", book.isbn)
           if(book.isbn === isbn) {
               books.splice(index,1);
           }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }



}
 
/* DOM Load Event */
document.addEventListener('DOMContentLoaded', localStore.displayBooks)


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
     
    /* Add Book in Local Storage */
    localStore.addBooks(book);




    /* Clear field */
    ui.clearField();
    }

     /* Remove field */
    ui.removeElement();

    /* Remove LS */
    console.log("The value of isbn >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",isbn);
    localStore.removeBooks(isbn)

   e.preventDefault(); 
})
