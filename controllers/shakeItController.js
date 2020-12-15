const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Themes
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTheme: function (req, res) {
    db.Themes
      .find({ theme: req.params.theme })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Themes
      .create({ theme: req.params.theme })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Themes
      .findOneAndUpdate({ theme: req.params.theme }, { $push: { activities: { name: req.params.activity } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: async function (req, res) {
    await db.Themes
      .findOneAndUpdate({ theme: req.params.theme }, { $pull: { activities: { _id: [req.params.id] } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArray: function (req, res) {
    db.Themes
      .findOneAndUpdate({ theme: req.params.theme }, { $set: { ["activities." + req.params.index + ".name"]: req.params.activity } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeTheme: function (req, res) {
    db.Themes
      .findOneAndDelete({ theme: req.params.theme })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
