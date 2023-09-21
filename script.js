i = 0;
let library = document.getElementById("library");
let bookFormButton = document.getElementById("bookFormButton");
let addBookButton = document.getElementById("addBookButton");
let closeFormButton = document.getElementById("closeFormButton");
bookFormButton.addEventListener("click",openBookForm);
addBookButton.addEventListener("click",addBookToLibrary);
closeFormButton.addEventListener("click",closeBookForm);


const myLibrary = [];

function Book(Title, Author, Pages, Status) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Status = Status;
};

function bookToShelf() {
    while (i < myLibrary.length) {
        library.innerHTML += `<div class="book" id="${i}"><h2>${myLibrary[i].Title}</h2><p>Author: ${myLibrary[i].Author}</p><p>Pages: ${myLibrary[i].Pages}</p><p>Status: ${myLibrary[i].Status}</p><div class="options"><div><input type="checkbox" /><p>Finished</p></div><button class="deleteButton">Delete</button>`;
        i++;
    };
    deleteButton = document.getElementsByClassName("deleteButton");
    Array.from(deleteButton).forEach((Book) => Book.addEventListener("click",deleteBook));
}

function addBookToLibrary(Title, Author, Pages, Status) {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Pages = document.getElementById("Pages").value;
    Status = document.getElementById("Status").value;
    let newBook = new Book(Title, Author, Pages, Status);
    myLibrary.push(newBook);
    document.getElementById("addPopUp").style.display = "none";
    document.getElementById("bookForm").reset();
    bookToShelf();
};

function openBookForm() {
    document.getElementById("addPopUp").style.display = "block";
}

function closeBookForm() {
    document.getElementById("addPopUp").style.display = "none";
    document.getElementById("bookForm").reset();
}

function deleteBook(e) {
    id = e.target.parentNode.parentNode.getAttribute("id");
    document.getElementById(`${id}`).remove();
}

