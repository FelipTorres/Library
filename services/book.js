const fs = require('fs');

function getAllBooks() {

    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id) {

    const books = getAllBooks();

    return books.filter(book => book.id === id)[0];
}

function createNewBook(newBook) {

    const books = getAllBooks();

    const newListBooks = JSON.stringify([...books, newBook]);

    fs.writeFileSync("books.json", newListBooks);
}

function updateBook(id,  updated) {

    let books = getAllBooks();

    const indexChanged = books.findIndex(book => book.id === id);

    books[indexChanged] = { ...books[indexChanged], ...updated };

    fs.writeFileSync("books.json", JSON.stringify(books));
}

function deletedRecord(id) {

    const books = getAllBooks();

    const indexChanged = books.filter(book => book.id !== id);

    fs.writeFileSync("books.json", JSON.stringify(indexChanged));
}

module.exports = {
    getAllBooks,
    getBookById,
    createNewBook,
    updateBook,
    deletedRecord
}