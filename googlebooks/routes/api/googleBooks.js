const axios = require("axios");
const router = require("express").Router();
const API = "AIzaSyCxNGf6tpB44bDYjupH0Id_SbtIpb08mzw"

router.get("/recipes", (req, res) => {
    // The API key is safe for embedding in URLs; it doesn't need any encoding. -Google website
    axios
        .get("https://www.googleapis.com/books/v1/volumes?key=",API,"&q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
