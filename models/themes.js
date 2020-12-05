const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemesSchema = new Schema(
  {
  theme: { type: String, required: true },
  activities: [
    {
      name: {
        type: String
      },
      submittedBy: {
        type: String
      }
    }
  ]
}
);

const Themes = mongoose.model("Themes", ThemesSchema);

module.exports = Themes;