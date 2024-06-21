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

        errorHandling(res, 500, error.message);
    }
}

function getBook(req, res) {
    try {

        const id = req.params.id;

        if (id && Number(id)) {

            const book = getBookById(id);

            res.send(book);

        } else {

            res.status(422);

            res.send("Id invalid.");
        }

    } catch (error) {

        errorHandling(res, 500, error.message);
    }
}

function postBook(req, res) {

    try {

        const newBook = req.body;

        if (newBook.name) {

            createNewBook(newBook);

            res.status(201);

            res.send('Book created successfully');

        } else {

            errorHandling(res, 422, "Field name is required.");
        }

    } catch (error) {

        errorHandling(res, 500, error.message);
    }
}

function patchBook(req, res) {

    try {

        const id = req.params.id;

        if (id && Number(id)) {

            const body = req.body;

            updateBook(id, body);

            res.send('Book changed successfully');

        } else {

            errorHandling(res, 422, "Id invalid.");
        }

    } catch (error) {

        errorHandling(res, 500, error.message);
    }
}

function deleteBook(req, res) {

    try {

        const id = req.params.id;

        if (id && Number(id)) {

            deletedRecord(id);

            res.send('Book deleted successfully');

        } else {

            errorHandling(res, 422, "Id invalid.");
        }

    } catch (error) {

        errorHandling(res, 500, error.message);
    }
}

function errorHandling(res, status, message) {

    res.status(status);

    res.send(message);
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}