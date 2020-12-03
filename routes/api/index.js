const router = require("express").Router();
const shakeItRoutes = require("./shakeIt");

// Book routes
router.use("/shakeit", shakeItRoutes);

module.exports = router;