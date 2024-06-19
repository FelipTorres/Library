function getBooks(req, res) {
    try {
        res.send("Helo world!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks
}