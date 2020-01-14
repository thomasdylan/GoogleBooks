const bookController = require("../../controllers/bookController");
const router = require("express").Router();
const axios = require('axios');

router.get("/api/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?key=&", { params: req.query })
        .then(({ data: { results }}) => res.json(results))
        .catch(err => res.status(422).json(err));
})

router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;
