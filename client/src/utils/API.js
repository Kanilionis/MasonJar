import axios from "axios";

export default {
  // Gets all themes
  getThemes: function() {
    return axios.get("/api/shakeit");
  },
  // gets all activities by a given theme
  getActivitiesByTheme: function(theme) {
    return axios.get("/api/shakeit/" + theme);
  },

  // Saves a theme to the database
  saveTheme: function(themeData) {
    return axios.post("/api/shakeit", themeData);
  }
};
   