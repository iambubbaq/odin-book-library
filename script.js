i = 0;
let library = document.getElementById("library");

const myLibrary = [{"Title": "A Game of Thrones", "Author": "G.R.R. Martin", "Pages": "600", "Status": "Read"}, {"Title": "Beauty and the Beast", "Author": "Disney", "Pages": "2000", "Status": "Not Read"}];

function Book() {
};

function addBookToLibrary() {
};

function bookToShelf() {
    while (i < myLibrary.length) {
        library.innerHTML += `<div class="book"><h2>${myLibrary[i].Title}</h2><p>Author: ${myLibrary[i].Author}</p><p>Pages: ${myLibrary[i].Pages}</p><p>Status: ${myLibrary[i].Status}</p>`;
        i++;
    };
}

