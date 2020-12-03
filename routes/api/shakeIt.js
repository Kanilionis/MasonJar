const router = require("express").Router();
const db = require("../models")

// Matches with "/api/themes"
router
  .route("/themes")
  .get(async function(req,res){
    const data = await db.themes.find()
    res.json(data)
  })

// Matches with "/api/:theme"
router
  .route("/:theme")
  .get(async function(req,res){
    const theme = req.data.params
    const data = await db.themes.find({theme: [theme]})
    res.json(data)
  })

module.exports = router;
