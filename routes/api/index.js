const router = require("express").Router();
const shakeItRoutes = require("./shakeIt");

// Book routes
router.use("/shakeIt", shakeItRoutes);

module.exports = router;
