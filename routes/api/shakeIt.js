const router = require("express").Router();
const shakeItController = require("../../controllers/shakeItController");

//Matches with "/api/shakeit"
router.route("/")
.get(shakeItController.findAll)
.post(shakeItController.create);

//Matches with "/api/shakeit/:theme"
router
.route("/:theme")
.get(shakeItController.findByTheme)
.put(shakeItController.update)
.delete(shakeItController.remove);

module.exports = router;