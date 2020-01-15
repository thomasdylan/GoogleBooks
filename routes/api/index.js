const router = require("express").Router();
const bookRoutes = require("./dbBooks");

router.use("/books", bookRoutes);

module.exports = router;