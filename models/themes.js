const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemesSchema = new Schema(
  {
  theme: { type: String, required: true },
  activities: [
    {
      name: {
        type: String,
        require: "Please enter a name"
      },
      submittedBy: {
        type: String,
        require: "Please enter a name"
      }
    }
  ]
}
);

const Themes = mongoose.model("Themes", ThemesSchema);

module.exports = Themes;
