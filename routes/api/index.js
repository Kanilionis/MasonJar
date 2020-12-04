const router = require("express").Router();
const shakeItRoutes = require("./shakeIt");

// Shake It routes
router.use("/shakeit", shakeItRoutes);

module.exports = router;