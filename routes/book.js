const { Router } = require("express");
const { getBooks } = require("../controllers/book");

const router = Router();

// Create first route GET on project.
router.get('/', getBooks);

// Create first route POST on project.
router.post('/', (req, res) => {

    res.send("You made the POST request.");
});

// Create first route PATCH on project.
router.patch('/', (req, res) => {

    res.send("You made the PATH request.");
});

// Create first route DELETE on project.
router.delete('/', (req, res) => {

    res.send("You made the DELETE request.");
});

// Export routers
module.exports = router;
