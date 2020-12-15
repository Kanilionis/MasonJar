const router = require("express").Router();
const shakeItController = require("../../controllers/shakeItController");

//Matches with "/api/shakeit"
router.route("/")
.get(shakeItController.findAll)
// .post(shakeItController.create);

//Matches with "/api/shakeit/:theme"
router
.route("/:theme")
.get(shakeItController.findByTheme)
.post(shakeItController.create)
.delete(shakeItController.removeTheme)
// .put(shakeItController.update)

router
.route("/:theme/:activity")
  .put(shakeItController.update)

router
.route("/delete/:theme/:id")
  .put(shakeItController.remove);

router
.route("/update/:theme/:activity/:index")
  .put(shakeItController.updateArray)
module.exports = router;