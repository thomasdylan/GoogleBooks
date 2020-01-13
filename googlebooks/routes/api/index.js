const router = require("express").Router();
const bookRoutes = require("../../models/book");

router.use("/books", bookRoutes);

module.exports = router;