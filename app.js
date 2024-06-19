const express = require("express")

// Import routes on archive book.js
const routeBook = require("./routes/book")

const app = express();

app.use('/books', routeBook);

// Configure port on application.
const port = 8000;

app.listen(port, () => {

    console.log(`Listening port ${port}`);
})