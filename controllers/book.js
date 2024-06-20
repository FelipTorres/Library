const {
    getAllBooks,
    getBookById,
    createNewBook,
    updateBook,
    deletedRecord
} = require("../services/book");

function getBooks(req, res) {
    try {

        const books = getAllBooks();

        res.send(books);

    } catch (error) {

        res.status(500);

        res.send(error.message);
    }
}

function getBook(req, res) {
    try {

        const id = req.params.id;

        const book = getBookById(id);

        res.send(book);

    } catch (error) {

        res.status(500);

        res.send(error.message);
    }
}

function postBook(req, res) {

    try {

        const newBook = req.body;

        createNewBook(newBook);

        res.status(201);

        res.send('Book created successfully');

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

function patchBook(req, res) {

    try {

        const id = req.params.id;

        const body = req.body;

        updateBook(id, body);

        res.send('Book changed successfully');

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

function deleteBook(req, res) {

    try {

        const id = req.params.id;

        deletedRecord(id);

        res.send('Book deleted successfully');

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}