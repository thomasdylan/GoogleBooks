const router = require("express").Router();
const bookRoutes = require("../../models/book");

router.use("/api", apiRoutes);

module.exports = router;