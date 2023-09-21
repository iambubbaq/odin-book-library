i = 0;
let newBook;
let library = document.getElementById("library");
let bookFormButton = document.getElementById("bookFormButton")
bookFormButton.addEventListener("click",openBookForm);

const myLibrary = [];

function Book(Title, Author, Pages, Status) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Status = Status;
};

function addBookToLibrary() {
    newBook = new Book();
    myLibrary.push("newBook");
};

function bookToShelf() {
    while (i < myLibrary.length) {
        library.innerHTML += `<div class="book"><h2>${myLibrary[i].Title}</h2><p>Author: ${myLibrary[i].Author}</p><p>Pages: ${myLibrary[i].Pages}</p><p>Status: ${myLibrary[i].Status}</p>`;
        i++;
    };
}

function openBookForm() {
    document.getElementById("addPopUp").style.display = "block";
}

